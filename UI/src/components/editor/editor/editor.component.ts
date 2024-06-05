import { Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';

@Component({
  selector: 'app-code-editor',
  templateUrl: './editor.component.html',
})
export class EditorComponent implements OnInit {
  code: string = '';
  highlightedCode: string = '';

  ngOnInit(): void {
    this.highlightCode();
  }

  onCodeChange(event: Event): void {
    const inputElement = event.target as HTMLTextAreaElement;
    this.code = inputElement.value;
    this.highlightCode();
  }

  highlightCode(): void {
    this.highlightedCode = Prism.highlight(this.code, Prism.languages['javascript'], 'javascript');
  }

  runCode() {
    console.log(this.code);
  }
}
