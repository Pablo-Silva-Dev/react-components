import { CSSProperties } from 'react';
import Lottie from 'react-lottie';

type JSONValue =
    | string
    | number
    | boolean
    //eslint-disable-next-line
    | JSONObject
    //eslint-disable-next-line
    | JSONArray;

interface JSONObject {
    [x: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> { }

interface LottieAnimationProps {
    animation: JSONArray,
    height: number;
    width: number;
    loop?: boolean,
    autoplay?: boolean,
    style?: CSSProperties;
}


export function LottieAnimation({
    animation,
    height,
    width,
    loop,
    autoplay,
    style
} : LottieAnimationProps) {

    const defaultOptions = {
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


    return (
        <Lottie
            options={defaultOptions}
            height={height}
            width={width}
            loop={loop}
            autoplay={autoplay}
            style={style}
        />
    )
}
