import React from "react/addons";
import brace from 'brace';

const fetch = window.fetch;

require('brace/mode/javascript')
require('brace/mode/jsx')
require('brace/theme/github')

let currentValue = "";

function onChange(newValue) {
  currentValue = newValue;
}

export default React.createClass({
  displayName: 'Editor',
  propTypes: {
    file  : React.PropTypes.string.required,
    mode  : React.PropTypes.string,
    theme : React.PropTypes.string,
    name : React.PropTypes.string,
    className: React.PropTypes.string,
    height : React.PropTypes.string,
    width : React.PropTypes.string,
    fontSize : React.PropTypes.number,
    showGutter : React.PropTypes.bool,
    onChange: React.PropTypes.func,
    value: React.PropTypes.string,
    onLoad: React.PropTypes.func,
    maxLines : React.PropTypes.number,
    readOnly : React.PropTypes.bool,
    highlightActiveLine : React.PropTypes.bool,
    showPrintMargin : React.PropTypes.bool,
    cursorStart: React.PropTypes.number,
    editorProps: React.PropTypes.object
  },
  getDefaultProps: function() {
    return {
      name   : 'brace-editor',
      mode   : 'jsx',
      theme  : 'github',
      height : '600px',
      width  : '100%',
      value  : '',
      fontSize   : 14,
      showGutter : true,
      onChange   : onChange,
      onLoad     : null,
      maxLines   : null,
      readOnly   : false,
      highlightActiveLine : true,
      showPrintMargin     : true,
      cursorStart: 1,
      editorProps : {$blockScrolling: true}
    };
  },
  onChange: function() {
    var value = this.editor.getValue();
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },

  update(nextProps) {
    let position = nextProps.position;
    if (nextProps.value !== currentValue) {
      currentValue = nextProps.value;
      this.editor = ace.edit(nextProps.name);
      this.editor.getSession().setMode('ace/mode/' + nextProps.mode);
      this.editor.setTheme('ace/theme/'+nextProps.theme);
      this.editor.setFontSize(nextProps.fontSize);
      this.editor.setOption('maxLines', nextProps.maxLines);
      this.editor.setOption('readOnly', nextProps.readOnly);
      this.editor.setOption('highlightActiveLine', nextProps.highlightActiveLine);
      this.editor.setShowPrintMargin(nextProps.setShowPrintMargin);
      if (this.editor.getValue() !== nextProps.value) {
        this.editor.setValue(nextProps.value, nextProps.cursorStart);
      }
      this.editor.renderer.setShowGutter(nextProps.showGutter);
      if (nextProps.onLoad) {
        nextProps.onLoad(this.editor);
      }
      setTimeout(() => this.editor.getSession().foldAll(1, 999, 0), 200);
    }
    console.log('moving cursor to', position);
    this.editor.moveCursorToPosition(position);
  },

  componentDidUpdate() {
    console.log('componentDidUpdate');
    //this.fetchContent();
  },

  componentDidMount: function() {
    currentValue = this.props.value;
    this.editor = ace.edit(this.props.name);

    var editorProps = Object.keys(this.props.editorProps);
    for (var i = 0; i < editorProps.length; i++) {
      this.editor[editorProps[i]] = this.props.editorProps[editorProps[i]];
    }

    this.editor.getSession().setMode('ace/mode/'+this.props.mode);
    this.editor.setTheme('ace/theme/'+this.props.theme);
    this.editor.setFontSize(this.props.fontSize);
    this.editor.setValue(this.props.value, this.props.cursorStart);
    this.editor.renderer.setShowGutter(this.props.showGutter);
    this.editor.setOption('maxLines', this.props.maxLines);
    this.editor.setOption('readOnly', this.props.readOnly);
    this.editor.setOption('highlightActiveLine', this.props.highlightActiveLine);
    this.editor.setShowPrintMargin(this.props.setShowPrintMargin);
    this.editor.on('change', this.onChange);
    setTimeout(() => this.editor.getSession().foldAll(1, 999, 0), 200);

    this.editor.commands.addCommand({
      name: 'Save and reload',
      bindKey: {win: 'Ctrl-S',  mac: 'Command-S'},
      exec: (editor) => {
        let position = this.editor.getCursorPosition();
        fetch('/editorapi/' + this.props.file, {
          method: 'post',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ code: currentValue })
        }).then(data => data.text()).then(data => {
          this.update({ ...this.props, value: data, position })
        });
      },
      readOnly: true // false if this command should not apply in readOnly mode
    });

    if (this.props.onLoad) {
      this.props.onLoad(this.editor);
    }
    this.fetchContent();
  },

  fetchContent() {
    console.log('fetch');
    let position = this.editor.getCursorPosition();
    fetch('/editorapi/' + this.props.file).then(data => data.text()).then(data => this.update({ ...this.props, value: data, position }));
  },

  componentWillUnmount: function() {
    this.editor = null;
  },

  componentWillReceiveProps: function(nextProps) {
    //let position = this.editor.getCursorPosition();
    //this.update({ ...nextProps, position });
  },

  render: function() {
    var divStyle = {
      width: this.props.width,
      height: this.props.height,
      textAlign: 'left'
    };
    var className = this.props.className;
    return (<div id={this.props.name} className={className} onChange={this.onChange} style={divStyle}></div>);
  }
});
