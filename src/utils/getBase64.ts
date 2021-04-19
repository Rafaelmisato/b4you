const getBase64Promise = file =>
  new Promise(resolve => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)

    fileReader.onloadend = loadEvent => {
      resolve(loadEvent.target.result)
    }

    fileReader.onerror = function (error) {
      console.log('Error: ', error)
    }
  })

export default getBase64Promise
