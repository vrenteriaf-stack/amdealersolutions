/* @ds-bundle: {"format":4,"namespace":"AMDealerSolutionsDesignSystem_7f9327","components":[{"name":"CaseStudyCard","sourcePath":"components/content/CaseStudyCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/content/CaseStudyCard.jsx":"a8494da7da74","components/content/ServiceCard.jsx":"2c58cf529ed8","components/content/StatCard.jsx":"55dd1a567671","components/content/TestimonialCard.jsx":"adeeb3d4a6ae","components/core/Badge.jsx":"fe023eae812b","components/core/Button.jsx":"506d884b84f0","components/core/Card.jsx":"065b4e048911","components/core/Icon.jsx":"313858b2ebcf","components/forms/Input.jsx":"763fd82ec2e1","components/navigation/Footer.jsx":"74ed6be2e27d","components/navigation/NavBar.jsx":"5109f5b10807","ui_kits/marketing-site/CTABanner.jsx":"2829623a1dda","ui_kits/marketing-site/CaseStudiesSection.jsx":"08c78b308ffd","ui_kits/marketing-site/ClientLogos.jsx":"870c31b65b0c","ui_kits/marketing-site/DifferenceSection.jsx":"0f1b5f2c17a3","ui_kits/marketing-site/Hero.jsx":"7f1dc8c20df6","ui_kits/marketing-site/Homepage.jsx":"148fba2bd281","ui_kits/marketing-site/ServicesGrid.jsx":"1e955f901fc2","ui_kits/marketing-site/StatsBand.jsx":"af7c461f6df5","ui_kits/marketing-site/TestimonialSection.jsx":"bc838a7748b2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AMDealerSolutionsDesignSystem_7f9327 = window.AMDealerSolutionsDesignSystem_7f9327 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/CaseStudyCard.jsx
try { (() => {
function CaseStudyCard({
  eyebrow = 'Case Study',
  title,
  imageSrc,
  href = '#',
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      background: imageSrc ? `url(${imageSrc}) center/cover` : 'var(--charcoal-200)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--charcoal-700)',
      color: 'var(--white)',
      padding: 'var(--space-5) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--sage-400)',
      marginBottom: 6
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-sm)'
    }
  }, title)));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function StatCard({
  value,
  label,
  tone = 'light',
  style
}) {
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      background: isDark ? 'var(--charcoal-700)' : 'var(--white)',
      border: isDark ? 'none' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      textAlign: 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-lg)',
      lineHeight: 'var(--lh-tight)',
      backgroundImage: 'var(--brand-gradient)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: isDark ? 'var(--sage-400)' : 'transparent',
      WebkitTextFillColor: isDark ? undefined : 'transparent'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 'var(--text-body-md)',
      color: isDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANT = {
  sage: {
    background: 'var(--sage-200)',
    color: 'var(--sage-700)'
  },
  sky: {
    background: 'var(--sky-200)',
    color: 'var(--sky-700)'
  },
  neutral: {
    background: 'var(--charcoal-50)',
    color: 'var(--text-secondary)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-inverse)',
    border: '1px solid var(--charcoal-300)'
  }
};
function Badge({
  children,
  variant = 'sage',
  style,
  ...rest
}) {
  const v = VARIANT[variant] || VARIANT.sage;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '5px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...v,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZE = {
  sm: {
    padding: '8px 16px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '12px 22px',
    fontSize: 'var(--text-body-md)'
  },
  lg: {
    padding: '16px 30px',
    fontSize: 'var(--text-body-lg)'
  }
};
const VARIANT = {
  primary: {
    background: 'var(--charcoal-700)',
    color: 'var(--white)',
    border: '1px solid var(--charcoal-700)'
  },
  gradient: {
    background: 'var(--brand-gradient)',
    color: 'var(--charcoal-800)',
    border: '1px solid transparent'
  },
  secondary: {
    background: 'var(--white)',
    color: 'var(--charcoal-700)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--charcoal-700)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--white)',
    color: 'var(--charcoal-700)',
    border: '1px solid transparent'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const v = VARIANT[variant] || VARIANT.primary;
  const s = SIZE[size] || SIZE.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      transition: `transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)`,
      opacity: disabled ? 0.5 : 1,
      ...v,
      ...s,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  padding = 'var(--space-8)',
  elevation = 'sm',
  tone = 'light',
  style,
  ...rest
}) {
  const shadow = {
    none: 'none',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  }[elevation] || 'var(--shadow-sm)';
  const bg = tone === 'dark' ? 'var(--charcoal-700)' : 'var(--white)';
  const color = tone === 'dark' ? 'var(--text-inverse)' : 'var(--text-primary)';
  const border = tone === 'dark' ? 'none' : '1px solid var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      color,
      border,
      borderRadius: 'var(--radius-lg)',
      boxShadow: shadow,
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  'chart-line-up': 'M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0V156.69l50.34-50.35a8,8,0,0,1,11.32,0L128,132.69,180.69,80H160a8,8,0,0,1,0-16h40a8,8,0,0,1,8,8v40a8,8,0,0,1-16,0V91.31l-58.34,58.35a8,8,0,0,1-11.32,0L96,123.31l-56,56V200H224A8,8,0,0,1,232,208Z',
  target: 'M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z',
  megaphone: 'M248,120a48.05,48.05,0,0,0-48-48H160.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,32,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,159.12,214l11,7.33A16,16,0,0,0,194.5,212l11.77-44.36A48.07,48.07,0,0,0,248,120ZM48,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C134.65,155,90.84,164.07,48,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM200,152H168V88h32a32,32,0,1,1,0,64Z',
  'magnifying-glass': 'M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z',
  'video-camera': 'M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z',
  hash: 'M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z',
  'users-three': 'M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z',
  'shield-check': 'M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z',
  handshake: 'M254.3,107.91,228.78,56.85a16,16,0,0,0-21.47-7.15L182.44,62.13,130.05,48.27a8.14,8.14,0,0,0-4.1,0L73.56,62.13,48.69,49.7a16,16,0,0,0-21.47,7.15L1.7,107.9a16,16,0,0,0,7.15,21.47l27,13.51,55.49,39.63a8.06,8.06,0,0,0,2.71,1.25l64,16a8,8,0,0,0,7.6-2.1l55.07-55.08,26.42-13.21a16,16,0,0,0,7.15-21.46Zm-54.89,33.37L165,113.72a8,8,0,0,0-10.68.61C136.51,132.27,116.66,130,104,122L147.24,80h31.81l27.21,54.41ZM41.53,64,62,74.22,36.43,125.27,16,115.06Zm116,119.13L99.42,168.61l-49.2-35.14,28-56L128,64.28l9.8,2.59-45,43.68-.08.09a16,16,0,0,0,2.72,24.81c20.56,13.13,45.37,11,64.91-5L188,152.66Zm62-57.87-25.52-51L214.47,64,240,115.06Zm-87.75,92.67a8,8,0,0,1-7.75,6.06,8.13,8.13,0,0,1-1.95-.24L80.41,213.33a7.89,7.89,0,0,1-2.71-1.25L51.35,193.26a8,8,0,0,1,9.3-13l25.11,17.94L126,208.24A8,8,0,0,1,131.82,217.94Z',
  'chart-pie-slice': 'M100,116.43a8,8,0,0,0,4-6.93v-72A8,8,0,0,0,93.34,30,104.06,104.06,0,0,0,25.73,147a8,8,0,0,0,4.52,5.81,7.86,7.86,0,0,0,3.35.74,8,8,0,0,0,4-1.07ZM88,49.62v55.26L40.12,132.51C40,131,40,129.48,40,128A88.12,88.12,0,0,1,88,49.62ZM128,24a8,8,0,0,0-8,8v91.82L41.19,169.73a8,8,0,0,0-2.87,11A104,104,0,1,0,128,24Zm0,192a88.47,88.47,0,0,1-71.49-36.68l75.52-44a8,8,0,0,0,4-6.92V40.36A88,88,0,0,1,128,216Z',
  broadcast: 'M128,88a40,40,0,1,0,40,40A40,40,0,0,0,128,88Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,152Zm73.71,7.14a80,80,0,0,1-14.08,22.2,8,8,0,0,1-11.92-10.67,63.95,63.95,0,0,0,0-85.33,8,8,0,1,1,11.92-10.67,80.08,80.08,0,0,1,14.08,84.47ZM69,103.09a64,64,0,0,0,11.26,67.58,8,8,0,0,1-11.92,10.67,79.93,79.93,0,0,1,0-106.67A8,8,0,1,1,80.29,85.34,63.77,63.77,0,0,0,69,103.09ZM248,128a119.58,119.58,0,0,1-34.29,84,8,8,0,1,1-11.42-11.2,103.9,103.9,0,0,0,0-145.56A8,8,0,1,1,213.71,44,119.58,119.58,0,0,1,248,128ZM53.71,200.78A8,8,0,1,1,42.29,212a119.87,119.87,0,0,1,0-168,8,8,0,1,1,11.42,11.2,103.9,103.9,0,0,0,0,145.56Z',
  'arrow-right': 'M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z',
  'check-circle': 'M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z',
  'caret-down': 'M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z',
  list: 'M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z',
  x: 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z',
  'envelope-simple': 'M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z',
  phone: 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z',
  quotes: 'M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z',
  star: 'M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z'
};
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  weight,
  style,
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 256 256",
    fill: color,
    style: style
  }, rest), /*#__PURE__*/React.createElement("path", {
    d: d
  }));
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = 'target',
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      padding: 'var(--space-6)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-gradient-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24,
    color: "var(--charcoal-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-sm)',
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-secondary)'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  name,
  role,
  tone = 'light',
  style
}) {
  const isDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-8)',
      borderRadius: 'var(--radius-lg)',
      background: isDark ? 'var(--charcoal-700)' : 'var(--white)',
      border: isDark ? 'none' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      maxWidth: 560,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quotes",
    size: 28,
    color: "var(--sage-500)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-heading-sm)',
      lineHeight: 'var(--lh-snug)',
      color: isDark ? 'var(--text-inverse)' : 'var(--text-primary)',
      fontWeight: 500
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: isDark ? 'var(--text-inverse-muted)' : 'var(--text-secondary)',
      fontWeight: 600
    }
  }, name, role ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400
    }
  }, " \u2014 ", role) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  placeholder,
  type = 'text',
  as = 'input',
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-secondary)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement(Tag, _extends({
    type: as === 'input' ? type : undefined,
    placeholder: placeholder,
    rows: as === 'textarea' ? 4 : undefined,
    style: {
      font: 'inherit',
      color: 'var(--text-primary)',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--border-strong)',
      outline: 'none',
      resize: as === 'textarea' ? 'vertical' : undefined
    },
    onFocus: e => {
      e.target.style.borderColor = 'var(--accent-secondary)';
    },
    onBlur: e => {
      e.target.style.borderColor = 'var(--border-strong)';
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  links = [],
  phone,
  email,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--charcoal-800)',
      color: 'var(--text-inverse-muted)',
      padding: 'var(--space-16) var(--space-6)',
      fontFamily: 'var(--font-body)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-16)',
      justifyContent: 'space-between',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--white)',
      fontSize: 20,
      maxWidth: 280
    }
  }, "AM Dealer Solutions", /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-inverse-muted)',
      marginTop: 10
    }
  }, "Empowering Dealerships For Success")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Links"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: 'var(--text-body-sm)',
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--white)',
      fontWeight: 600,
      marginBottom: 4
    }
  }, "Contact"), phone && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 16
  }), phone), email && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-body-sm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "envelope-simple",
    size: 16
  }), email)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  links = [],
  logoSrc,
  onLinkClick,
  style
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-6)',
      background: 'var(--charcoal-700)',
      color: 'var(--white)',
      fontFamily: 'var(--font-body)',
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Logo",
    style: {
      height: 28
    }
  }) : /*#__PURE__*/React.createElement("span", null, "AM Dealer Solutions")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'none',
      gap: 28,
      alignItems: 'center'
    },
    className: "amds-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: onLinkClick,
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 500,
      textDecoration: 'none'
    }
  }, l.label))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gradient",
    size: "sm",
    style: {
      display: 'none'
    },
    className: "amds-nav-cta"
  }, "Get a Free Consultation"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(o => !o),
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--white)',
      cursor: 'pointer'
    },
    className: "amds-nav-burger"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'list',
    size: 24
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: 'var(--charcoal-700)',
      display: 'flex',
      flexDirection: 'column',
      padding: 'var(--space-4) var(--space-6)',
      gap: 16,
      zIndex: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href || '#',
    onClick: onLinkClick,
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: 'var(--text-body-md)',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "gradient",
    size: "sm"
  }, "Get a Free Consultation")), /*#__PURE__*/React.createElement("style", null, `@media (min-width:840px){.amds-nav-links{display:flex !important}.amds-nav-cta{display:inline-flex !important}.amds-nav-burger{display:none !important}}`));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CTABanner.jsx
try { (() => {
function CTABanner() {
  const {
    Input,
    Button
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: 'var(--charcoal-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-lg)',
      marginBottom: 32
    }
  }, "Fill Out The Form Below to Schedule Your No Obligation Consulting Call."), sent ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--sage-400)',
      fontWeight: 600
    }
  }, "Thanks \u2014 we'll be in touch shortly.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Dealership Name",
    placeholder: "RightDrive Auto",
    style: {
      color: 'var(--text-inverse-muted)'
    }
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work Email",
    type: "email",
    placeholder: "you@dealership.com",
    style: {
      color: 'var(--text-inverse-muted)'
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg",
    style: {
      justifyContent: 'center',
      marginTop: 8
    }
  }, "Start Now"))));
}
window.CTABanner = CTABanner;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CTABanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/CaseStudiesSection.jsx
try { (() => {
function CaseStudiesSection() {
  const {
    Badge,
    CaseStudyCard
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 24px',
      background: 'var(--charcoal-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "sky"
  }, "Case Studies"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-lg)',
      margin: '16px 0 0'
    }
  }, "Proven Success in Action")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    title: "RightDrive",
    imageSrc: "../../assets/photography/dealership-lot.jpeg"
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    title: "Viva Auto Group",
    imageSrc: "../../assets/photography/dealership-showroom-01.jpeg"
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    title: "Crawford Buick GMC",
    imageSrc: "../../assets/photography/dealership-showroom-02.jpeg"
  }))));
}
window.CaseStudiesSection = CaseStudiesSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/CaseStudiesSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ClientLogos.jsx
try { (() => {
function ClientLogos() {
  const names = ['RightDrive', 'Bailey', 'Viva Auto Group', 'Toliver Brothers', 'Fiesta', '4M Autoplex', 'Crawford Buick GMC', 'Automotive Imports', 'Vision', 'Flagstaff', 'Lake Powell', 'Martin'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '48px 24px',
      background: 'var(--charcoal-50)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-label)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 24
    }
  }, "Proven Results Across Top Dealerships"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 28,
      justifyContent: 'center',
      maxWidth: 900,
      margin: '0 auto'
    }
  }, names.map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      color: 'var(--charcoal-400)',
      fontSize: 16
    }
  }, n))));
}
window.ClientLogos = ClientLogos;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ClientLogos.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/DifferenceSection.jsx
try { (() => {
function DifferenceSection() {
  const {
    Icon
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  const items = [['broadcast', 'Unparalleled Access', "We are a true partner. Think of us like you just hired 10 marketing experts along with a dedicated Marketing Director — a direct line of communication lets us pivot fast."], ['target', 'Customized Marketing Strategies', 'Built around your specific dealer infrastructure, dealer goals, competitive landscape and market area.'], ['handshake', 'Dealer First Mentality', "We've built dealerships from the ground up ourselves, and understand the unique challenges dealers face when scaling."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      background: 'var(--charcoal-700)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-lg)',
      textAlign: 'center',
      marginBottom: 56
    }
  }, "The AMDS Difference"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 32
    }
  }, items.map(([icon, title, desc]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 14,
      background: 'var(--brand-gradient)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--charcoal-800)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-heading-sm)',
      margin: '0 0 10px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-inverse-muted)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--lh-relaxed)',
      margin: 0
    }
  }, desc))))));
}
window.DifferenceSection = DifferenceSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/DifferenceSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Hero.jsx
try { (() => {
function Hero() {
  const {
    Button,
    Badge
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--charcoal-800)',
      color: '#fff',
      padding: '120px 24px 100px',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(circle at 80% 20%, rgba(157,203,177,0.18), transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outline"
  }, "Automotive \xB7 Powersports \xB7 RV"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-display-xl)',
      letterSpacing: 'var(--tracking-tight)',
      margin: '20px 0 16px',
      lineHeight: 'var(--lh-tight)'
    }
  }, "Sell More,", /*#__PURE__*/React.createElement("br", null), "Spend Less"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-inverse-muted)',
      maxWidth: 520,
      margin: '0 auto 32px'
    }
  }, "We help automotive, RV and powersports dealers sell more with tailored, result-driven marketing."), /*#__PURE__*/React.createElement(Button, {
    variant: "gradient",
    size: "lg"
  }, "Get a Free Consultation")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/Homepage.jsx
try { (() => {
function Homepage() {
  const {
    NavBar,
    Footer
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    links: [{
      label: 'Automotive'
    }, {
      label: 'Powersport Dealers'
    }, {
      label: 'RV Dealers'
    }, {
      label: 'Service Repair'
    }, {
      label: 'Contact'
    }]
  }), /*#__PURE__*/React.createElement(window.Hero, null), /*#__PURE__*/React.createElement(window.ClientLogos, null), /*#__PURE__*/React.createElement(window.ServicesGrid, null), /*#__PURE__*/React.createElement(window.DifferenceSection, null), /*#__PURE__*/React.createElement(window.StatsBand, null), /*#__PURE__*/React.createElement(window.CaseStudiesSection, null), /*#__PURE__*/React.createElement(window.TestimonialSection, null), /*#__PURE__*/React.createElement(window.CTABanner, null), /*#__PURE__*/React.createElement(Footer, {
    links: [{
      label: 'Home'
    }, {
      label: 'About Us'
    }, {
      label: 'Our Services'
    }, {
      label: 'Case Studies'
    }, {
      label: 'Contact Us'
    }],
    phone: "(915) 519-6592",
    email: "info@amdealersolutions.com"
  }));
}
window.Homepage = Homepage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/ServicesGrid.jsx
try { (() => {
function ServicesGrid() {
  const {
    Badge,
    ServiceCard
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  const services = [['magnifying-glass', 'SEM', 'Industry-leading search engine marketing designed to increase leads and eliminate waste, maximizing budget efficiency.'], ['hash', 'SEO', 'Increase your website rankings for the highest converting keywords in your market and surpass your competitors in organic search.'], ['target', 'Vehicle Listing Ads (VLAs)', 'Our bread and butter — we optimize your inventory feed for maximum visibility with unlimited focuses to segment your inventory.'], ['users-three', 'Social Media Inventory Ads', 'We use your CRM sold-customer data to attribute exactly how many sales came from your social media inventory ads.'], ['broadcast', 'TikTok Inventory Ads', 'TikTok has become one of the largest search engines in the world — we get in-market audiences looking at your inventory.'], ['handshake', 'Hispanic Marketing', 'Culturally relevant, bilingual strategies that connect your brand with Hispanic audiences and drive authentic engagement.'], ['chart-pie-slice', 'Advanced Analytics Reporting', 'We break down and analyze every dollar spent, providing a clear ROI — know exactly what performs and why.'], ['video-camera', 'Streaming Ads', 'Targeted video advertising delivered across streaming services and apps.'], ['megaphone', 'Social Media Lead Gen Ads', 'Capture potential customers directly within platforms using targeted campaigns and built-in lead forms.']];
  const consulting = [['chart-line-up', 'CRM Analysis', 'We analyze your CRM processes to help you uncover more opportunities and dial in your lead handling.'], ['shield-check', 'Coop Services', "We help you maximize your co-op dollars by submitting covered services and making sure you're using them effectively."], ['handshake', 'Vendor Management', 'We analyze 3rd-party vendors, negotiate on your behalf, and put your dollars where they make the most sense.']];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 24px',
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "sage"
  }, "Our Services"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-lg)',
      margin: '16px 0 0'
    }
  }, "What We Do to Drive Results")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20,
      marginBottom: 56
    }
  }, services.map(([icon, title, desc]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title,
    description: desc
  }))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-md)',
      marginBottom: 20
    }
  }, "Consulting Services"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, consulting.map(([icon, title, desc]) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: title,
    icon: icon,
    title: title,
    description: desc
  }))));
}
window.ServicesGrid = ServicesGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/ServicesGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/StatsBand.jsx
try { (() => {
function StatsBand() {
  const {
    StatCard
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 24px',
      maxWidth: 1160,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-heading-lg)',
      textAlign: 'center',
      marginBottom: 40
    }
  }, "In the first 60 days our dealers average"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "32.45%",
    label: "Increase in leads"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "28.71%",
    label: "Increase in sales"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "38.60%",
    label: "Saved in wasted ad spend"
  })));
}
window.StatsBand = StatsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/StatsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing-site/TestimonialSection.jsx
try { (() => {
function TestimonialSection() {
  const {
    TestimonialCard
  } = window.AMDealerSolutionsDesignSystem_7f9327;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 24px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    quote: "Working with AM Dealer Solutions was a game-changer for our store. They cut our ad spend by nearly 20%, but more importantly, our sales jumped within the first 60 days.",
    name: "Anonymous Client",
    role: "2024"
  }));
}
window.TestimonialSection = TestimonialSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing-site/TestimonialSection.jsx", error: String((e && e.message) || e) }); }

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
