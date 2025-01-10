export class Char {
  public static isChar(char: any): boolean {
    return (
      char &&
      (typeof char == "string" || char instanceof String) &&
      char.length == 1
    );
  }

  public static isChinese(char: string): boolean {
    const code = char.charCodeAt(0);
    // In Unicode
    return (
      (code >= 19968 && code <= 40959) || // Common
      (code >= 63744 && code <= 64975) || // Extend A
      (code >= 65313 && code <= 65439) || // Extend B
      (code >= 65470 && code <= 65500) // Extend C
    );
  }

  public static isEnglish(char: string): boolean {
    const code = char.charCodeAt(0);
    // In ASCII
    return code >= 32 && code <= 126;
  }

  public static isJapanese(char: string): boolean {
    const code = char.charCodeAt(0);
    // In Unicode
    return (
      (code >= 12449 && code <= 12543) || // 平仮名
      (code >= 12544 && code <= 12751) || // 片仮名
      (code >= 13312 && code <= 19903) || // 汉字
      (code >= 65377 && code <= 65439) // 汉字 Extend
    );
  }

  // 1: Half-width; 2: Full-width;
  public static getCharWidth(char: string): number {
    if (this.isEnglish(char)) {
      return 1;
    } else {
      return 2;
    }
  }

  public static getWidthString(str: string, limit: number = 40): string {
    let width = 0;
    let res = "";

    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      width += this.getCharWidth(char);

      if (width > limit) {
        return res;
      } else {
        res += char;
      }
    }
    return res;
  }

  public static countStringWidth(str: string) {
    let count = 0;

    for (let char of str) {
      const width = this.getCharWidth(char);
      count += width;
    }

    return count;
  }
}
