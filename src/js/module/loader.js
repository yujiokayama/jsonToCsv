// loadingAnimation
export class LoadingAnimation {
  // properties
  constructor() {
    this.loadingIcon = document.querySelector('.loadingIcon');
  }
  // method
  loadStart() {
    this.loadingIcon.style.display = 'block';
  }
  loadEnd() {
    this.loadingIcon.style.display = 'none';
  }
}
