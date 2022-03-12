# AvatarLib

This library was generated with version 11.2.14. Image upload can create by custom via your first and second name. It will generate canvas Image. Otherwise you can upload your custom one.

![Alt text](assets/pen.svg?raw=true "avatar png")

## Use

Install using `npm i avatar-lib`
Import `AvatarLibModule` in your required module

Use `<lib-avatar-lib> </lib-avatar-lib>` this selector for uploader view.

>`<lib-avatar-lib [config]="config" (imageEventData)="imageEventData($event)"></lib-avatar-lib>`

`config = { name: 'Firstname Second Name', defaultImage: 'example.png'  }`

`imageEventData` Will return the out of file chooser

