import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  phoneReg: RegExp = /1[3-9]\d{9}/g;
  defaultUserAvatar = '/assets/images/123.jpg';


  /**
   * 
   * @param url   file
  * 
   * @param outputFormat string
   * 
   * 将文件转成base64
   */
  compressBase64(base64: string, maxsize: number = 40000, outputFormat = "image/png"): Promise<string> {

    return new Promise((resolve, reject) => {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var img = new Image;
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        var width = img.width;
        var height = img.height;
        let compress = 1;
        let rate = 1
        if (width * height > maxsize) { rate = Math.ceil(width * height / 40000); }
        compress = 1 / rate;
        canvas.width = width * compress;
        canvas.height = height * compress;
        ctx.drawImage(img, 0, 0, width, height, 0, 0, width * compress, height * compress);
        let compressData = canvas.toDataURL(outputFormat)
        resolve(compressData);
      };
      img.src = base64;
    });
  }

  convertFileToBase64(file: File): Promise<string> {
    let reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        let base64: string = <string>e.target['result']
        resolve(base64);
      }
      reader.readAsDataURL(file);
    });

  }

  // 自动化创建文件文本框,并选择读取base64,可以自定义压缩
  selectFile(): Promise<string> {
    return new Promise(resolve => {
      let fileInputEle = document.createElement('input');
      fileInputEle.type = 'file';
      let reader = new FileReader();
      reader.onload = (event) => {
        let base64 = <any>event.target['result'];
        resolve(base64);
      };


      fileInputEle.onchange = (event) => {

        reader.readAsDataURL(fileInputEle.files[0]);


      };
      fileInputEle.click();

    });

  }



  constructor() { }

}
