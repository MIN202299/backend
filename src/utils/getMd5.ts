import SparkMd5 from 'spark-md5'
export function getMd5FromFile(file: File): Promise<string> {
  const size = 3 * 1024 * 1024;
  if (file.size < size) {
    return getMd51(file)

  } else {
    return getMd52(file)
  }
}

export function getMd51(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsBinaryString(file)
    fileReader.onload = function(e) {
      const md5 = SparkMd5.hashBinary(e.target?.result)
      resolve(md5)
    }
    fileReader.onerror = function(e) {
      reject('文件读取失败')
    }
  })

}
export function getMd52(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const sliceLength = 10;
    const chunkSize = Math.ceil(file.size / sliceLength);
    const fileReader = new FileReader()
    const md5 = new SparkMd5();
    let index = 0
    const loadFile = () => {
      const slice = file.slice(index, index + chunkSize)
      fileReader.readAsBinaryString(slice)
    }
    loadFile()
    fileReader.onload = e => {
      md5.appendBinary(e.target?.result);
      if (index < file.size) {
        index += chunkSize;
        loadFile();
      } else {
        resolve(md5.end())
      }
    };
    fileReader.onerror = e => {
      reject('文件读取失败')
    }
  })
}
