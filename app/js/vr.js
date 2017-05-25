window.addEventListener('load', onVrViewLoad)
function onVrViewLoad() {
  var vrView = new VRView.Player('#vrview', {
    video: '//storage.googleapis.com/vrview/examples/video/congo_2048.mp4',
    // video: './images/videos/demo_02.mp4',
    is_stereo: true,
    width: '100%',
    height: '100%',
    is_vr_off: false
    /*
    video	String	URL to a 360° video file or an adaptive streaming manifest file (.mpd or .m3u8). Exactly one of video or image is required.
    image	String	URL to a 360° image file. Exactly one of video or image is required.
    width	String	String value for the iframe's width attribute.
    height	String	String value for the iframe's height attribute.
    preview	String	(Optional) URL to a preview image for a 360° image file.
    is_stereo	Boolean	(Optional) Indicates whether the content at the image or video URL is stereo or not.
    is_debug	Boolean	(Optional) When true, turns on debug features like rendering hotspots ad showing the FPS meter.
    is_vr_off	Boolean	(Optional) When true, disables the VR mode button.
    is_autopan_off	Boolean	(Optional) When true, disables the autopan introduction on desktop.
    default_yaw	Number	(Optional) Numeric angle in degrees of the initial heading for the 360° content. By default, the camera points at the center of the underlying image.
    is_yaw_only	Boolean	(Optional) When true, prevents roll and pitch. This is intended for stereo panoramas.
    */
  });
}
