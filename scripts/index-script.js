let galleryPreviews = [
previewOne = document.getElementById('previewOne'),
previewTwo = document.getElementsById('previewTwo'),
previewThree = document.getElementById('previewThree')]
  

navToGallery = () => {
  galleryPreviews.forEach((preview) => {
    preview.addEventListener('click', () => {
      document.location.href = './pages/gallery.html'
      console.log("Navigating to gallery.html...")
    })
  })
}