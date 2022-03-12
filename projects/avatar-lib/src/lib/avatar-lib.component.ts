import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Color {
  active: boolean;
  color: string;
}

@Component({
  selector: 'lib-avatar-lib',
  templateUrl: './avatar-lib.component.html',
  styleUrls: ['./avatar-lib.component.scss']
})
export class AvatarLibComponent implements OnInit {

  backgroundColors: Array<Color> = [{ active: false, color: '#ff0057' }, { active: false, color: '#008000' }, { active: false, color: '#ffc107' }, { active: false, color: '#2196f3' }, { active: false, color: '#0ac9b5' }, { active: false, color: '#ff0000' }, { active: false, color: '#ffeb3b' }, { active: false, color: '#ff5722' }, { active: false, color: '#48ff48' }, { active: false, color: '#494040' }, { active: false, color: '#d2691e' }, { active: false, color: '#0000ff' }];
  defaultLetterColor = '#ffffff';
  avatarSrc: any;
  userSrc: any;
  fileInput: File | undefined;
  configuration: any;
  chooseId: number = 0;
  error = false;
  @Output() imageEventData: EventEmitter<any> = new EventEmitter();
  @Input() set config(value: any) {
    if (value) {
      this.configuration = value;
      this.userSrc = value.defaultImage;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedAvatarColor(selectedColor: Color, index: number): void {
    this.error = false;
    this.backgroundColors.filter((color, i) => { color.active = (selectedColor === color) ? true : false });
    const text = this.makeLetter(this.configuration.name);
    this.avatarSrc = this.makeAvatar(text, this.defaultLetterColor, selectedColor);
  }

  makeLetter(name: string) {
    const splittedName = name.split(' ');
    return (splittedName[0].charAt(0) + splittedName[1].charAt(0)).toUpperCase();
  }

  makeAvatar(text: string, letterColor: string, bgColor: Color) {
    const canvas: any = document.createElement("canvas");
    let context: any = canvas.getContext("2d");
    if (context) {
      canvas.width = 120;
      canvas.height = 120;
      context.fillStyle = bgColor?.color;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "40px sans-serif";
      context.fillStyle = letterColor;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, canvas.width / 2, canvas.height / 2);
    }
    return canvas.toDataURL("image/png");
  }


  onChangeImage(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.error = false;
      this.fileInput = event.target.files[0];
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.userSrc = reader.result;
      reader.readAsDataURL(file);
    }
  }

  onClickChoosePic(chooseId: number) {
    this.error =  (!this.userSrc && !this.avatarSrc) ? true : false;
    if (!this.avatarSrc && !this.userSrc)  { return; }
    this.chooseId = (chooseId === 1 && this.userSrc) ? 1 : (chooseId === 2 && this.avatarSrc) ? 2 : 0;
    this.emitFileEvent(chooseId);
  }

  emitFileEvent(chooseId: number) {
    switch (chooseId) {
      case 1:
        this.emitInputChangeEvent();
        break;
      case 2:
        this.emitCustomAvatarEvent();
        break;
      default:
        break;
    }
  }

  emitInputChangeEvent() {
    const fileData = {
      file: this.fileInput,
      isAvatar: false,
      name: this.fileInput?.name
    }
    this.imageEventData.emit(fileData);
  }

  emitCustomAvatarEvent() {
    const fileData = {
      file: this.avatarSrc,
      isAvatar: true,
      name: (Date.now() + Math.random()).toFixed()
    }
    this.imageEventData.emit(fileData);
  }

}
