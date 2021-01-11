import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'GoodGames';

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ok');

    // $.getScript('assets/vendor/object-fit-images/dist/ofi.min.js'),

    $.getScript('assets/vendor/gsap/src/minified/TweenMax.min.js');
    $.getScript('assets/vendor/gsap/src/minified/plugins/ScrollToPlugin.min.js');

    $.getScript('assets/vendor/popper.js/dist/umd/popper.min.js'),
    $.getScript('assets/vendor/bootstrap/dist/js/bootstrap.min.js'),
    // $.getScript('assets/vendor/sticky-kit/dist/sticky-kit.min.js'),
    // $.getScript('assets/vendor/jarallax/dist/jarallax.min.js'),
    // $.getScript('assets/vendor/jarallax/dist/jarallax-video.min.js'),
    // $.getScript('assets/vendor/imagesloaded/imagesloaded.pkgd.min.js'),
    // $.getScript('assets/vendor/flickity/dist/flickity.pkgd.min.js'),
    // $.getScript('assets/vendor/photoswipe/dist/photoswipe.min.js'),
    // $.getScript('assets/vendor/photoswipe/dist/photoswipe-ui-default.min.js'),
    // $.getScript('assets/vendor/jquery-validation/dist/jquery.validate.min.js'),
    // $.getScript('assets/vendor/jquery-countdown/dist/jquery.countdown.min.js'),
    // $.getScript('assets/vendor/moment/min/moment.min.js'),
    // $.getScript('assets/vendor/moment-timezone/builds/moment-timezone-with-data.min.js'),
    // $.getScript('assets/vendor/hammerjs/hammer.min.js'),
    // $.getScript('assets/vendor/nanoscroller/bin/javascripts/jquery.nanoscroller.js'),
    // $.getScript('assets/vendor/soundmanager2/script/soundmanager2-nodebug-jsmin.js'),


    $.getScript('assets/vendor/bootstrap-slider/dist/bootstrap-slider.min.js');

    // $.getScript('assets/vendor/summernote/dist/summernote-bs4.min.js');
    // $.getScript('assets/plugins/nk-share/nk-share.js');

    $.getScript('assets/js/goodgames.min.js');
    $.getScript('assets/js/goodgames-init.js');
    $.getScript('assets/js/demo.js');
  }
}
