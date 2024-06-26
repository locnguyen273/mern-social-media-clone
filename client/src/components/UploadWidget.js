import { useEffect, useRef } from 'react';

let cloudinary;

const UploadWidget = ({ children, onUpload }) => {

  const widget = useRef();
  useEffect(() => {
    if ( !cloudinary ) {
      cloudinary = window.cloudinary;
    }
    function onIdle() {
      if ( !widget.current ) {
        widget.current = createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);

    return () => {
      widget.current?.destroy();
      widget.current = undefined;
    }
    // eslint-disable-next-line
  }, []);

  function createWidget() {
    const cloudName = "dwxjxkad5";
    const uploadPreset = "cycjfo2z";

    if (!cloudName || !uploadPreset) {
      console.warn(`Kindly ensure you have the cloudName and UploadPreset 
      setup in your .env file at the root of your project.`)
    }
    const options = {
      cloudName, // Ex: mycloudname
      uploadPreset, // Ex: myuploadpreset
    }

    return cloudinary?.createUploadWidget(options,
      function (error, result) {
        // The callback is a bit more chatty than failed or success so
        // only trigger when one of those are the case. You can additionally
        // create a separate handler such as onEvent and trigger it on
        // ever occurrence
        if ((error || result.event === 'success') && typeof onUpload === 'function' ) {
          onUpload(error, result, widget);
        }
      }
    );
  }

  function open() {
    if ( !widget.current ) {
      widget.current = createWidget();
    }
    widget.current && widget.current.open();
  }

  return (
    <>
      {children({ cloudinary, widget, open })}
    </>
  )
}

export default UploadWidget;