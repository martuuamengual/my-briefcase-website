import React from "react";

export function wrapRef(Component) {
    class WrapRef extends React.Component {
  
      render() {
        const {forwardedRef, ...rest} = this.props;
        // Assign the custom prop "forwardedRef" as a ref
        return <Component forwardedRef={forwardedRef} {...rest} />;    }
    }
  
    // Mira el segundo parámetro "ref" suministrado por React.forwardRef.
    // Podemos pasarlo a WrapRef como una prop regular, por ejemplo: "forwardedRef"
    // Y puede ser agregado al "Component".
    return React.forwardRef((props, ref) => {
            return <WrapRef {...props} forwardedRef={ref} />;
        }
    );
}
  
  