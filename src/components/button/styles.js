const defaultButtonText = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#FFFFFF",
};

const defaultContainer = {
  width: "auto",
  height: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px 16px 12px 16px",
  backgroundColor: "#fa3232",
  border: "1px #1a1717",
  borderRadius: "2px",
};

export const styles = {
  defaultButton: {
    ...defaultContainer,
  },

  secondaryButton: {
    ...defaultContainer,
    backgroundColor: "#FFFFFF",
    border: "1px #fa3232",
  },

  tertiaryButton: {
    ...defaultContainer,
    backgroundColor: "#1a1717",
    border: "1px #FFFFFF",
  },

  defaultButtonText: {
    ...defaultButtonText,
  },

  secondaryButtonText: {
    ...defaultButtonText,
    color: "#fa3232",
  },

  tertiaryButtonText: {
    ...defaultButtonText,
    color: "#FFFFFF",
  },
};
