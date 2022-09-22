import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailEditorComponent } from 'angular-email-editor';






@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.scss'],
})

export class TemplateViewComponent implements OnInit {


  
  logoImg: any = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';
  headerImg: any = 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png';
  
  readFile(file:any, name:any) {

    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      //@ts-ignore
      const result = event.target.result;
      console.log(result)
      if (name === 'logoImg') {
        this.logoImg = result
      } else {
        this.headerImg = result
      }
      
     
    });
    
    reader.readAsDataURL(file);
  }
  handleChange(e: any) {

 this.readFile(e.target.files[0], e.target.name)


  };

  constructor() {}
  ngOnInit() {
    
  }

  @ViewChild(EmailEditorComponent)

  private emailEditor: EmailEditorComponent = new EmailEditorComponent;

  // called when the editor is created
  editorLoaded() {
    console.log('editorLoaded');
    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  // called when the editor has finished loading
  editorReady() {
    console.log('editorReady');
  }

  exportHtml() {
    this.emailEditor.editor.exportHtml((data: any) =>
      console.log('exportHtml', data)
    );
  }
    
  }
  

