export interface ICanvasParam{
	element: HTMLCanvasElement;
	width: number;
	height: number;
	pxratio?: number;
	ctx?: CanvasRenderingContext2D;
}

export interface ITmpParam{
	obj?: {
		size_value: number;
	    size_anim_speed: number;
	    move_speed: number;
	    line_linked_distance: number;
	    line_linked_width: number;
	    mode_grab_distance: number;
	    mode_bubble_distance: number;
	    mode_bubble_size: number;
	    mode_repulse_distance: number;
	};
	retina?: boolean;
	img_type?: string;
	img_types?: string[];
	img_obj?: HTMLImageElement;
	img_error?: any;
	count_svg?: number;
	img_index?: number;
	pushing?: any;
	bubble_clicking?: boolean;
	bubble_duration_end?: boolean;
	repulse_clicking?: boolean;
	repulse_finish?: boolean;
	repulse_count?: number;
	checkAnimFrame?: any;
	drawAnimFrame?: any;
};

export interface IMouseParam{
	pos_x?: number;
	pos_y?: number;
	click_pos_x?: number;
	click_pos_y?: number;
	click_time?: number;
};

export enum ShapeType {
	CIRCLE = 'circle',
	EDGE = 'edge',
	TRIANGLE = 'triangle',
	POLYGON = 'polygon',
	STAR = 'star',
	IMAGE = 'image',
	IMAGES = 'images',
}

export enum MoveDirection {
	TOP = 'top',
	TOP_RIGHT = 'top-right',
	RIGHT = 'right',
	BOTTOM_RIGHT = 'bottom-right',
	BOTTOM = 'bottom',
	BOTTOM_LEFT = 'bottom-left',
	LEFT = 'left',
	TOP_LEFT = 'top-left',
	NONE = 'none',
}

export interface IImageDefinition {
	src: string;
	width: number;
	height: number;
}

export interface IShapeDefinition {
	type: ShapeType;
	stroke: {
		width: number;
		color: any; // TODO: Add definition for color
	};
	polygon: {
		nb_sides: number;
	};
	image: IImageDefinition;
	images: IImageDefinition[];
}

export interface IParams{
	particles: {
		number: {
			value: number;
			density: {
				enable: boolean;
				value_area: number;
			}
		};
		color: {
			value: any;
		};
		shape: IShapeDefinition;
		opacity: {
			value: number;
			random: boolean;
			anim: {
				enable: boolean;
				speed: number;
				opacity_min: number;
				sync: boolean;
			}
		};
		size: {
			value: number;
			random: boolean;
			anim: {
				enable: boolean;
				speed: number;
				size_min: number;
				sync: boolean;
			}
		};
		line_linked: {
			enable: boolean;
			distance: number;
			color: any;
			opacity: number;
			width: number;
			color_rgb_line?: any;
			shadow: {
				enable: boolean;
				blur: number;
				color: string;
			};
		};
		move: {
			enable: boolean;
			speed: number;
			direction: MoveDirection;
			random: boolean;
			straight: boolean;
			out_mode: string;
			bounce: boolean;
			attract: {
				enable: boolean;
				rotateX: number;
				rotateY: number;
			}
		};
		array: any[];
	};
	interactivity: {
		el?: EventTarget;
		status?: string;
		detect_on: string;
		events: {
			onhover: {
				enable: boolean;
				mode: string | string[];
			};
			onclick: {
				enable: boolean;
				mode: string | string[];
			};
			resize: boolean;
		};
		modes: {
			grab: {
				distance: number;
				line_linked: {
					opacity: number;
				}
			};
			bubble: {
				distance: number;
				size: number;
				duration: number;
				opacity?: number;
			};
			repulse: {
				distance: number;
				duration: number;
			};
			push: {
				particles_nb: number;
			};
			remove: {
				particles_nb: number;
			};
		};
		mouse?: IMouseParam;
	};
	retina_detect: boolean;
	fps_limit: number;
}