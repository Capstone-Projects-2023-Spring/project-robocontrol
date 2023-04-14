export class COLORS {
    static readonly PRIMARY = '#ffffff'
    static readonly OFFWHITE = '#f0ecec'
    static readonly HOVER = '#8c8c8c'
	static readonly BACKGROUND = '#a8b4fc'
	static readonly TEXT = '#000000'
    static readonly PRESSBUTTON = '#98a4fc'
    static readonly UNPRESSBUTTON = '#f0ecec'
    static readonly GRADIENT_START = 'hsla(255, 12%, 94%, 1)'
    static readonly GRADIENT_END = 'hsla(230, 100%, 78%, 1)'
}

export class PATHS {
    static readonly HOME = '/home'
    static readonly CONTROL = '/control'
    static readonly Login = '/login'
    static readonly Signup = '/signup'
    static readonly ABOUT = '/about'
}

export class FONT_FAMILY {
    static readonly BUTTON = `
        color: ${COLORS.TEXT};
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
		font-size: calc(var(--vh) * .012);
        letter-spacing: 2px;
        cursor: pointer;
		border: 3px solid;
		padding: 0.25em 0.5em;
		box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px, 15px 15px 13px rgba(0, 0, 0, 0.3);	
	`
}
