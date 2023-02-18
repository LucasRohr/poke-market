import React, { useMemo } from "react";
import { BUTTON_VARIANTS } from "../../constants";

import { styles } from "./styles";

export function Button({
  style = styles.defaultButton,
  onClick = () => {},
  variant = BUTTON_VARIANTS.DEFAULT,
  text = "",
  child,
}) {
  const buttonTextClass = useMemo(() => {
    return {
      DEFAULT: styles.defaultButtonText,
      SECONDARY: styles.secondaryButtonText,
      TERTIARY: styles.tertiaryButtonText,
    };
  }, []);

  const buttonContainerClass = useMemo(() => {
    return {
      DEFAULT: styles.defaultButton,
      SECONDARY: styles.secondaryButton,
      TERTIARY: styles.tertiaryButton,
    };
  }, []);

  const buttonContainerStyle = {
    ...buttonContainerClass[variant],
    ...style,
  };

  function renderContent() {
    const hasText = text.length > 0;
    const textClass = buttonTextClass[variant];

    if (!hasText) {
      return child;
    }

    return <span style={textClass}>{text}</span>;
  }

  return (
    <button style={buttonContainerStyle} onClick={onClick}>
      {renderContent()}
    </button>
  );
}
