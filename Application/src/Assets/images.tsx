export interface source {
    src: string;
    viewBox: string;
}
interface props {
    width: string;
    height?: string;
    color?: string;
    source: source;
    px?: number;
}

export default function Image({ width, height, color, source, px }: props) {
    return (
        <svg style={{ paddingLeft: px ? `${px}` : '0', paddingRight: px ? `${px}` : '0' }} width={width} height={height} viewBox={source.viewBox} fill={color ? color : 'currentColor'}>
            <path d={source.src} />
        </svg>
    )
}

export const image_logo_threejs: source = {
    src: ''
}