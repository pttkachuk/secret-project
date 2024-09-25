export const selectStyles = {
    control: styles => ({
        ...styles,
        width: '50px',
        height: '30px',
        padding: '0 15px',
        fontSize: '16px',
        backgroundColor: 'trasparent',
        border: 'none',
        cursor: 'pointer',
        //[breakpoints.tablet]: {
        //    width: '160px',
        //},
        //[breakpoints.desktop]: {
        //    width: '182px',
        //},
    }),
    valueContainer: styles => ({ ...styles, padding: '0', margin: '0' }),
    indicatorSeparator: styles => ({ ...styles, display: 'none' }),
    dropdownIndicator: (styles, state) => ({
        ...styles,
        display: 'none',
        //padding: '0',
        //transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
        //transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
    }),
    singleValue: styles => ({ ...styles, margin: '0' }),
    input: styles => ({ ...styles, padding: '0' }),
    menu: styles => ({
        ...styles,
        width: '100%',
        maxWidth: '60px',
        height: '150px',
        background: 'black',
        backdropFilter: `blur(50px)`,
        border: 'none',
        //[breakpoints.tablet]: {
        //    width: '160px',
        //},
        //[breakpoints.desktop]: {
        //    width: '182px',
        //},
    }),
    menuList: styles => ({
        ...styles,
        width: '100%',
        maxWidth: '60px',
        height: '150px',
        padding: '5px 8px',
        border: 'none',
        //[breakpoints.tablet]: {
        //    maxWidth: '160px',
        //},
        //[breakpoints.desktop]: {
        //    maxWidth: '182px',
        //},
        //'::-webkit-scrollbar': {
        //    width: '7px',
        //    height: '0px',
        //    borderRadius: '8px',
        //},
        //'::-webkit-scrollbar-track': {
        //    backgroundColor: 'var(--form-color)',
        //},
        //'::-webkit-scrollbar-thumb': {
        //    backgroundColor: 'var(--violet)',
        //},
        //'::-webkit-scrollbar-thumb:hover': {
        //    backgroundColor: 'var(--white-button-text)',
        //},
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: 'pointer',
        color: null,
        backgroundColor: null,
    }),
};