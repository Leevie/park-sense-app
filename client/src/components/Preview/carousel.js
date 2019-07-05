// import React from 'react';
// import ReactDOM from 'react-dom';

// import ImageGallery from '../src/ImageGallery';

// const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';

// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       showIndex: false,
//       showBullets: true,
//       infinite: true,
//       showThumbnails: true,
//       showFullscreenButton: true,
//       showGalleryFullscreenButton: true,
//       showPlayButton: true,
//       showGalleryPlayButton: true,
//       showNav: true,
//       isRTL: false,
//       slideDuration: 450,
//       slideInterval: 2000,
//       slideOnThumbnailOver: false,
//       thumbnailPosition: 'bottom',
//       showVideo: {},
//     };

//     this.images = [
//       {
//         thumbnail: `${PREFIX_URL}4v.jpg`,
//         original: `${PREFIX_URL}4v.jpg`,
//         embedUrl: 'https://www.youtube.com/embed/4pSzhZ76GdM?autoplay=1&showinfo=0',
//         description: 'Render custom slides within the gallery',
//         renderItem: this._renderVideo.bind(this)
//       },
//       {
//         original: `${PREFIX_URL}image_set_default.jpg`,
//         thumbnail: `${PREFIX_URL}image_set_thumb.jpg`,
//         imageSet: [
//           {
//             srcSet: `${PREFIX_URL}image_set_cropped.jpg`,
//             media : '(max-width: 1280px)',
//           },
//           {
//             srcSet: `${PREFIX_URL}image_set_default.jpg`,
//             media : '(min-width: 1280px)',
//           }
//         ]
//       },
//       {
//         original: `${PREFIX_URL}1.jpg`,
//         thumbnail: `${PREFIX_URL}1t.jpg`,
//         originalClass: 'featured-slide',
//         thumbnailClass: 'featured-thumb',
//         description: 'Custom class for slides & thumbnails'
//       },
//     ].concat(this._getStaticImages());
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.slideInterval !== prevState.slideInterval ||
//         this.state.slideDuration !== prevState.slideDuration) {
//       // refresh setInterval
//       this._imageGallery.pause();
//       this._imageGallery.play();
//     }
//   }

//   _onImageClick(event) {
//     console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
//   }

//   _onImageLoad(event) {
//     console.debug('loaded image', event.target.src);
//   }

//   _onSlide(index) {
//     this._resetVideo();
//     console.debug('slid to index', index);
//   }

//   _onPause(index) {
//     console.debug('paused on index', index);
//   }

//   _onScreenChange(fullScreenElement) {
//     console.debug('isFullScreen?', !!fullScreenElement);
//   }

//   _onPlay(index) {
//     console.debug('playing from index', index);
//   }

//   _handleInputChange(state, event) {
//     this.setState({[state]: event.target.value});
//   }

//   _handleCheckboxChange(state, event) {
//     this.setState({[state]: event.target.checked});
//   }

//   _handleThumbnailPositionChange(event) {
//     this.setState({thumbnailPosition: event.target.value});
//   }

//   _getStaticImages() {
//     let images = [];
//     for (let i = 2; i < 12; i++) {
//       images.push({
//         original: `${PREFIX_URL}${i}.jpg`,
//         thumbnail:`${PREFIX_URL}${i}t.jpg`
//       });
//     }

//     return images;
//   }

//   _resetVideo() {
//     this.setState({showVideo: {}});

//     if (this.state.showPlayButton) {
//       this.setState({showGalleryPlayButton: true});
//     }

//     if (this.state.showFullscreenButton) {
//       this.setState({showGalleryFullscreenButton: true});
//     }
//   }

//   _toggleShowVideo(url) {
//     this.state.showVideo[url] = !Boolean(this.state.showVideo[url]);
//     this.setState({
//       showVideo: this.state.showVideo
//     });

//     if (this.state.showVideo[url]) {
//       if (this.state.showPlayButton) {
//         this.setState({showGalleryPlayButton: false});
//       }

//       if (this.state.showFullscreenButton) {
//         this.setState({showGalleryFullscreenButton: false});
//       }
//     }
//   }

//   _renderVideo(item) {
//     return (
//       <div className='image-gallery-image'>
//         {
//           this.state.showVideo[item.embedUrl] ?
//             <div className='video-wrapper'>
//                 <a
//                   className='close-video'
//                   onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
//                 >
//                 </a>
//                 <iframe
//                   width='560'
//                   height='315'
//                   src={item.embedUrl}
//                   frameBorder='0'
//                   allowFullScreen
//                 >
//                 </iframe>
//             </div>
//           :
//             <a onClick={this._toggleShowVideo.bind(this, item.embedUrl)}>
//               <div className='play-button'></div>
//               <img src={item.original}/>
//               {
//                 item.description &&
//                   <span
//                     className='image-gallery-description'
//                     style={{right: '0', left: 'initial'}}
//                   >
//                     {item.description}
//                   </span>
//               }
//             </a>
//         }
//       </div>
//     );
//   }

//   render() {
//     return (

//       <section className='app'>
//         <ImageGallery
//           ref={i => this._imageGallery = i}
//           items={this.images}
//           lazyLoad={false}
//           onClick={this._onImageClick.bind(this)}
//           onImageLoad={this._onImageLoad}
//           onSlide={this._onSlide.bind(this)}
//           onPause={this._onPause.bind(this)}
//           onScreenChange={this._onScreenChange.bind(this)}
//           onPlay={this._onPlay.bind(this)}
//           infinite={this.state.infinite}
//           showBullets={this.state.showBullets}
//           showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
//           showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
//           showThumbnails={this.state.showThumbnails}
//           showIndex={this.state.showIndex}
//           showNav={this.state.showNav}
//           isRTL={this.state.isRTL}
//           thumbnailPosition={this.state.thumbnailPosition}
//           slideDuration={parseInt(this.state.slideDuration)}
//           slideInterval={parseInt(this.state.slideInterval)}
//           slideOnThumbnailOver={this.state.slideOnThumbnailOver}
//           additionalClass="app-image-gallery"
//         />

//         <div className='app-sandbox'>

//           <div className='app-sandbox-content'>
//             <h2 className='app-header'>Settings</h2>

//             <ul className='app-buttons'>
//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Play Interval</span>
//                   <input
//                     className='app-interval-input'
//                     type='text'
//                     onChange={this._handleInputChange.bind(this, 'slideInterval')}
//                     value={this.state.slideInterval}/>
//                 </div>
//               </li>

//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Slide Duration</span>
//                   <input
//                     className='app-interval-input'
//                     type='text'
//                     onChange={this._handleInputChange.bind(this, 'slideDuration')}
//                     value={this.state.slideDuration}/>
//                 </div>
//               </li>

//               <li>
//                 <div className='app-interval-input-group'>
//                   <span className='app-interval-label'>Thumbnail Bar Position</span>
//                   <select
//                     className='app-interval-input'
//                     value={this.state.thumbnailPosition}
//                     onChange={this._handleThumbnailPositionChange.bind(this)}
//                   >
//                     <option value='bottom'>Bottom</option>
//                     <option value='top'>Top</option>
//                     <option value='left'>Left</option>
//                     <option value='right'>Right</option>
//                   </select>
//                 </div>
//               </li>
//             </ul>

//             <ul className='app-checkboxes'>
//               <li>
//                 <input
//                   id='infinite'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'infinite')}
//                   checked={this.state.infinite}/>
//                   <label htmlFor='infinite'>allow infinite sliding</label>
//               </li>
//               <li>
//                 <input
//                   id='show_fullscreen'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showFullscreenButton')}
//                   checked={this.state.showFullscreenButton}/>
//                   <label htmlFor='show_fullscreen'>show fullscreen button</label>
//               </li>
//               <li>
//                 <input
//                   id='show_playbutton'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showPlayButton')}
//                   checked={this.state.showPlayButton}/>
//                   <label htmlFor='show_playbutton'>show play button</label>
//               </li>
//               <li>
//                 <input
//                   id='show_bullets'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showBullets')}
//                   checked={this.state.showBullets}/>
//                   <label htmlFor='show_bullets'>show bullets</label>
//               </li>
//               <li>
//                 <input
//                   id='show_thumbnails'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showThumbnails')}
//                   checked={this.state.showThumbnails}/>
//                   <label htmlFor='show_thumbnails'>show thumbnails</label>
//               </li>
//               <li>
//                 <input
//                   id='show_navigation'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showNav')}
//                   checked={this.state.showNav}/>
//                   <label htmlFor='show_navigation'>show navigation</label>
//               </li>
//               <li>
//                 <input
//                   id='show_index'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'showIndex')}
//                   checked={this.state.showIndex}/>
//                   <label htmlFor='show_index'>show index</label>
//               </li>
//               <li>
//                 <input
//                   id='is_rtl'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'isRTL')}
//                   checked={this.state.isRTL}/>
//                   <label htmlFor='is_rtl'>is right to left</label>
//               </li>
//               <li>
//                 <input
//                   id='slide_on_thumbnail_hover'
//                   type='checkbox'
//                   onChange={this._handleCheckboxChange.bind(this, 'slideOnThumbnailOver')}
//                   checked={this.state.slideOnThumbnailOver}/>
//                   <label htmlFor='slide_on_thumbnail_hover'>slide on mouse over thumbnails</label>
//               </li>
//             </ul>
//           </div>

//         </div>
//       </section>
//     );
//   }
// }

// ReactDOM.render(<App/>, document.getElementById('list-group-item'));








// --------------------------------------------------------------------------------------------------------------------------------
// import React from "react";
// import  Carousel  from 'react-bootstrap/Carousel';
// import "./style2.css";
// // import {render} from 'react-dom';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Thumbnail  from "./Thumbnail";

//  function Thumbnail() {

  // <Carousel autoPlay>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt='cat'/>
  //     <p className="legend">Legend 1</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" alt='cat'/>
  //     <p className="legend">Legend 2</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" alt='cat'/>
  //     <p className="legend">Legend 3</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" alt='cat'/>
  //     <p className="legend">Legend 4</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" alt='cat'/>
  //     <p className="legend">Legend 5</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" alt='cat'/>
  //     <p className="legend">Legend 6</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" alt='cat'/>
  //     <p className="legend">Legend 7</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" alt='cat'/>
  //     <p className="legend">Legend 8</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" alt='cat' />
  //     <p className="legend">Legend 9</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" alt='cat' />
  //     <p className="legend">Legend 10</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg"alt='cat' />
  //     <p className="legend">Legend 11</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" alt='cat'/>
  //     <p className="legend">Legend 12</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" alt='cat'/>
  //     <p className="legend">Legend 13</p>
  //   </div>
  //   <div>
  //     <img src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" alt='cat'/>
  //     <p className="legend">Legend 14</p>
  //   </div>
  // </Carousel>
  // };
  // export default Carousel;
  // Thumbnail();



// -----------------------------------------------------------------------------------------------------------------------------------------
// // eslint-disable-next-line no-empty-pattern
// export function Thumbnail({
// }) {
// return (
//   // <Carousel>
// <Carousel className="carousel">
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://static1.squarespace.com/static/574efd5837013b939ab02fce/579a4e4fe6f2e1648e669184/5914eb0a86e6c0ab6b487330/1494543118016/childrensplayarea1600px.jpg?format=2500w"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>First slide label</h3>
//       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDrkzLMCgYeMyN41mJgarmje6mG1zVoMrJ-Brf5SN-Ghf07DedYw"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Second slide label</h3>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="holder.js/800x400?text=Third slide&bg=20232a"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
//       <h3>Third slide label</h3>
//       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// // </Carousel>

// )
// }

// // ReactDOM.render(<Carousel/>, document.querySelector('.carousel'));
// export default Carousel;