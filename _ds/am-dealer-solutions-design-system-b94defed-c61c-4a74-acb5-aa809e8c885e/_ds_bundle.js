/* @ds-bundle: {"format":4,"namespace":"AMDealerSolutionsDesignSystem_b94def","components":[{"name":"AccentBar","sourcePath":"components/core/AccentBar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LogoBadge","sourcePath":"components/core/LogoBadge.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"CaseStudyCard","sourcePath":"components/marketing/CaseStudyCard.jsx"},{"name":"FeatureRow","sourcePath":"components/marketing/FeatureRow.jsx"},{"name":"LogoWall","sourcePath":"components/marketing/LogoWall.jsx"},{"name":"MetricStrip","sourcePath":"components/marketing/MetricStrip.jsx"},{"name":"PhotoPanel","sourcePath":"components/marketing/PhotoPanel.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"SiteFooter","sourcePath":"components/marketing/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/marketing/SiteHeader.jsx"},{"name":"Testimonial","sourcePath":"components/marketing/Testimonial.jsx"}],"sourceHashes":{"components/core/AccentBar.jsx":"4e60e2181cf3","components/core/Button.jsx":"1b82f9e3aec1","components/core/Eyebrow.jsx":"8951985fabad","components/core/Icon.jsx":"3377e6f706d0","components/core/LogoBadge.jsx":"e1b5fd9e7c35","components/core/SectionHeading.jsx":"422eda70e17d","components/core/StatCard.jsx":"4f73a539cdd8","components/marketing/CaseStudyCard.jsx":"dbdae4fd0c34","components/marketing/FeatureRow.jsx":"4de3ad51aca5","components/marketing/LogoWall.jsx":"d1a1953127da","components/marketing/MetricStrip.jsx":"b6739d8397f0","components/marketing/PhotoPanel.jsx":"f255dfa22d6d","components/marketing/ServiceCard.jsx":"431cf236b384","components/marketing/SiteFooter.jsx":"e4ec0f6bd98c","components/marketing/SiteHeader.jsx":"d93b57905ebb","components/marketing/Testimonial.jsx":"30245d81a698","ui_kits/website/Contact.jsx":"ba20f6ea4fee","ui_kits/website/FranchiseDealers.jsx":"3fe4f3474055","ui_kits/website/Home.jsx":"2c9cc74bce84","ui_kits/website/shared.jsx":"39caf1910710"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AMDealerSolutionsDesignSystem_b94def = window.AMDealerSolutionsDesignSystem_b94def || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AccentBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function AccentBar({
  orientation = 'horizontal',
  length = 120,
  thickness = 14,
  tone = 'mint',
  style,
  ...rest
}) {
  const color = tone === 'mint' ? 'var(--am-mint)' : 'var(--am-ice)';
  const dims = orientation === 'horizontal' ? {
    width: length,
    height: thickness
  } : {
    width: thickness,
    height: length
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      background: color,
      ...dims,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { AccentBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AccentBar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-core)',
  fontWeight: 'var(--fw-semibold)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid transparent',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--sp-2)',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'var(--transition-interactive)',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    fontSize: '11px',
    padding: '9px 18px'
  },
  md: {
    fontSize: 'var(--fs-caption)',
    padding: '13px 26px'
  },
  lg: {
    fontSize: 'var(--fs-body-sm)',
    padding: '17px 34px'
  }
};
const variants = {
  primary: {
    background: 'var(--action-primary-bg)',
    color: 'var(--action-primary-fg)'
  },
  secondary: {
    background: 'var(--action-secondary-bg)',
    color: 'var(--action-secondary-fg)',
    borderColor: 'var(--action-secondary-border)'
  },
  onLight: {
    background: 'var(--am-charcoal)',
    color: 'var(--am-white)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-accent)',
    padding: '4px 0',
    borderRadius: 0
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  href,
  disabled,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = variants[variant] || variants.primary;
  const s = {
    ...base,
    ...sizes[size],
    ...v,
    ...(hover && !disabled && variant === 'primary' ? {
      background: 'var(--action-primary-bg-hover)'
    } : null),
    ...(hover && !disabled && variant === 'secondary' ? {
      borderColor: 'var(--am-mint)',
      color: 'var(--am-mint)'
    } : null),
    ...(hover && !disabled && variant === 'onLight' ? {
      background: 'var(--am-charcoal-soft)'
    } : null),
    ...(hover && !disabled && variant === 'ghost' ? {
      color: 'var(--text-link-hover)'
    } : null),
    ...(press && !disabled ? {
      transform: 'scale(.98)'
    } : null),
    ...(disabled ? {
      background: 'var(--action-disabled-bg)',
      color: 'var(--action-disabled-fg)',
      borderColor: 'transparent',
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    style: s,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  bar = false,
  tone = 'mint',
  style,
  ...rest
}) {
  const color = tone === 'mint' ? 'var(--text-eyebrow)' : tone === 'ice' ? 'var(--am-ice)' : 'var(--am-grey-600)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      ...style
    }
  }, rest), bar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: color,
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-eyebrow)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      lineHeight: 'var(--lh-eyebrow)'
    }
  }, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is a substitution: the AM Dealer Solutions deck draws its capability icons
   as vector shapes inside PowerPoint and the website uses raster theme icons that
   were not supplied. Lucide's 1.5px stroke line set is the closest match. */
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1.5,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({
      nameAttr: 'data-lucide',
      root: ref.current.parentNode || document
    });
  }, [name]);
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      strokeWidth,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/LogoBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoBadge({
  tone = 'light',
  size = 72,
  src,
  style,
  ...rest
}) {
  const file = src || (tone === 'light' ? 'am-logo-light.png' : 'am-logo-charcoal.png');
  return /*#__PURE__*/React.createElement("img", _extends({
    src: file,
    alt: "AM Dealer Solutions",
    width: size,
    height: size,
    style: {
      display: 'block',
      objectFit: 'contain',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { LogoBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LogoBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  lead,
  emphasis,
  size = 'h2',
  align = 'left',
  onLight = false,
  rule = false,
  style,
  ...rest
}) {
  const fs = {
    display: 'var(--fs-display-2)',
    h1: 'var(--fs-h1)',
    h2: 'var(--fs-h2)',
    h3: 'var(--fs-h3)'
  }[size];
  const lh = {
    display: 'var(--lh-display-2)',
    h1: 'var(--lh-h1)',
    h2: 'var(--lh-h2)',
    h3: 'var(--lh-h3)'
  }[size];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-core)',
      fontSize: fs,
      lineHeight: lh,
      letterSpacing: 'var(--ls-display)',
      fontWeight: 'var(--fw-light)',
      color: onLight ? 'var(--text-heading-on-light)' : 'var(--text-heading-tint)',
      textWrap: 'pretty'
    }
  }, lead && /*#__PURE__*/React.createElement("span", null, lead, " "), emphasis && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: onLight ? 'var(--am-charcoal)' : 'var(--am-white)'
    }
  }, emphasis)), rule && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 72,
      height: 'var(--border-w-accent)',
      background: 'var(--am-mint)',
      marginTop: 'var(--sp-4)',
      marginLeft: align === 'center' ? 'auto' : 0,
      marginRight: align === 'center' ? 'auto' : 0
    }
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatCard({
  value,
  label,
  sublabel,
  tone = 'ice',
  align = 'left',
  style,
  ...rest
}) {
  const tones = {
    ice: {
      background: 'var(--surface-panel-ice)',
      fg: 'var(--am-charcoal)',
      muted: 'var(--am-grey-600)'
    },
    mint: {
      background: 'var(--surface-panel-mint)',
      fg: 'var(--am-charcoal)',
      muted: 'var(--am-grey-600)'
    },
    dark: {
      background: 'var(--surface-card)',
      fg: 'var(--am-white)',
      muted: 'var(--am-grey-300)'
    },
    outline: {
      background: 'transparent',
      fg: 'var(--am-white)',
      muted: 'var(--am-grey-300)',
      border: '1px solid var(--border-hairline)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: tones.background,
      border: tones.border || 'none',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-5) var(--sp-5)',
      textAlign: align,
      minWidth: 180,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-stat)',
      lineHeight: 'var(--lh-stat)',
      fontWeight: 'var(--fw-bold)',
      color: tones.fg,
      letterSpacing: 'var(--ls-display)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: tones.fg
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-1)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: tones.muted
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseStudyCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function CaseStudyCard({
  image,
  client,
  kicker = 'Case Study:',
  href = '#',
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: light ? 'var(--surface-card-light)' : 'var(--surface-card)',
      border: '1px solid ' + (light ? 'var(--border-hairline-light)' : 'var(--border-hairline)'),
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      transition: 'var(--transition-interactive)',
      transform: hover ? 'translateY(-4px)' : 'none',
      boxShadow: hover ? 'var(--shadow-md)' : 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: client,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(.85)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--am-mint)'
    }
  }, kicker), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-2)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)',
      color: light ? 'var(--am-charcoal)' : 'var(--am-white)'
    }
  }, client), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    href: href
  }, "Read more"))));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FeatureRow({
  icon,
  title,
  children,
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      gap: 'var(--sp-4)',
      alignItems: 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: light ? 'var(--am-grey-100)' : 'var(--am-charcoal-soft)',
      boxShadow: light ? 'none' : 'var(--shadow-inset-hair)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: light ? 'var(--am-charcoal)' : 'var(--am-mint)'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-h4)',
      fontWeight: 'var(--fw-bold)',
      color: light ? 'var(--am-charcoal)' : 'var(--am-white)',
      lineHeight: 'var(--lh-h4)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-2)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: light ? 'var(--text-body-on-light)' : 'var(--text-body)',
      maxWidth: 'var(--measure-body)',
      textWrap: 'pretty'
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LogoWall({
  logos = [],
  tone = 'dark',
  columns = 6,
  rowHeight = 56,
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: light ? 'var(--surface-card-light)' : 'transparent',
      borderRadius: light ? 'var(--radius-md)' : 0,
      padding: light ? 'var(--sp-6)' : 0,
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
      gap: 'var(--sp-6) var(--sp-7)',
      alignItems: 'center',
      ...style
    }
  }, rest), logos.map((l, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: l.src,
    alt: l.alt || '',
    style: {
      maxWidth: '100%',
      height: rowHeight,
      objectFit: 'contain',
      filter: light ? 'grayscale(1) brightness(.6)' : 'grayscale(1) brightness(1.6)',
      opacity: light ? 1 : .9
    }
  })));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/marketing/MetricStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function MetricStrip({
  items = [],
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: '1fr',
      gap: 'var(--sp-6)',
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: '1px solid ' + (light ? 'var(--border-hairline-light)' : 'var(--border-hairline)'),
      paddingTop: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-numeric)',
      fontSize: 'var(--fs-h1)',
      fontWeight: 'var(--fw-extrabold)',
      color: light ? 'var(--am-charcoal)' : 'var(--am-mint)',
      lineHeight: 1
    }
  }, it.value), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-3)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-sm)',
      color: light ? 'var(--text-body-on-light)' : 'var(--text-body)'
    }
  }, it.label))));
}
Object.assign(__ds_scope, { MetricStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/MetricStrip.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PhotoPanel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PhotoPanel({
  src,
  alt = '',
  ratio = '4 / 3',
  fade = false,
  caption,
  radius = 'var(--radius-photo)',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: ratio,
      borderRadius: radius,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-photo)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      filter: 'saturate(.85)'
    }
  }), fade && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, var(--am-charcoal) 0%, rgba(48,49,49,0) 55%)'
    }
  })), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 'var(--sp-3)',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: 'var(--am-grey-400)'
    }
  }, caption));
}
Object.assign(__ds_scope, { PhotoPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PhotoPanel.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ServiceCard({
  icon,
  title,
  children,
  tone = 'dark',
  align = 'center',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: light ? 'var(--surface-card-light)' : 'var(--surface-card)',
      border: light ? '1px solid var(--border-hairline-light)' : '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-6) var(--sp-5)',
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      gap: 'var(--sp-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: light ? 'var(--am-charcoal)' : 'var(--am-ice)'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-sm)',
      fontWeight: 'var(--fw-bold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--am-charcoal)' : 'var(--am-white)',
      lineHeight: 1.35
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      lineHeight: 1.7,
      color: light ? 'var(--text-body-on-light)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, children));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  logo,
  links = [],
  phone,
  email,
  socials = [],
  legal = '\u00A9 2025 A|M Dealer Solutions. All rights reserved',
  style,
  ...rest
}) {
  const label = {
    fontFamily: 'var(--font-core)',
    fontSize: 'var(--fs-caption)',
    fontWeight: 'var(--fw-semibold)',
    letterSpacing: 'var(--ls-eyebrow)',
    textTransform: 'uppercase',
    color: 'var(--am-mint)'
  };
  const item = {
    fontFamily: 'var(--font-core)',
    fontSize: 'var(--fs-body-sm)',
    color: 'var(--text-body)',
    textDecoration: 'none'
  };
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--am-charcoal-deep)',
      padding: 'var(--sp-9) var(--gutter-page) var(--sp-6)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr',
      gap: 'var(--sp-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "AM Dealer Solutions",
    style: {
      height: 96,
      objectFit: 'contain',
      justifySelf: 'start'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Links"), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: item
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 'var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: label
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: 'tel:' + (phone || ''),
    style: item
  }, phone), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + (email || ''),
    style: item
  }, email), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      marginTop: 'var(--sp-2)'
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s,
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-hairline)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--am-white)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 16
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      paddingTop: 'var(--sp-4)',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--am-grey-400)'
    }
  }, /*#__PURE__*/React.createElement("span", null, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Privacy Policy"), /*#__PURE__*/React.createElement("span", null, "Terms of Service"), /*#__PURE__*/React.createElement("span", null, "Cookies Settings"))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/marketing/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  logo,
  items = [],
  active,
  onNavigate,
  cta = 'Get a free consultation',
  onCta,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--sp-4) var(--gutter-page)',
      background: 'rgba(35,36,36,.72)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "AM Dealer Solutions",
    style: {
      height: 52,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-6)'
    }
  }, items.map(it => {
    const on = it === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it);
      },
      style: {
        fontFamily: 'var(--font-core)',
        fontSize: 'var(--fs-caption)',
        fontWeight: 'var(--fw-semibold)',
        letterSpacing: 'var(--ls-label)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: on ? 'var(--am-mint)' : 'var(--am-white)',
        paddingBottom: 4,
        borderBottom: '2px solid ' + (on ? 'var(--am-mint)' : 'transparent'),
        transition: 'var(--transition-interactive)'
      }
    }, it);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Testimonial({
  quote,
  name,
  meta,
  avatar,
  tone = 'dark',
  style,
  ...rest
}) {
  const light = tone === 'light';
  return /*#__PURE__*/React.createElement("blockquote", _extends({
    style: {
      margin: 0,
      maxWidth: 760,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      fontWeight: 'var(--fw-light)',
      color: light ? 'var(--am-charcoal)' : 'var(--am-ice)',
      textWrap: 'pretty'
    }
  }, '\u201C', quote, '\u201D'), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 'var(--sp-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-3)'
    }
  }, avatar && /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      color: light ? 'var(--am-charcoal)' : 'var(--am-white)'
    }
  }, name), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-core)',
      fontSize: 'var(--fs-caption)',
      color: 'var(--am-grey-400)'
    }
  }, meta))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Testimonial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  SectionHeading,
  Icon,
  MetricStrip
} = window.AMDealerSolutionsDesignSystem_b94def;
const field = {
  width: '100%',
  background: 'var(--am-charcoal-soft)',
  border: '1px solid var(--border-hairline)',
  borderRadius: 'var(--radius-sm)',
  padding: '14px 16px',
  color: 'var(--am-white)',
  fontFamily: 'var(--font-core)',
  fontSize: 'var(--fs-body-sm)',
  outline: 'none'
};
const labelStyle = {
  fontSize: 'var(--fs-caption)',
  fontWeight: 'var(--fw-semibold)',
  letterSpacing: 'var(--ls-label)',
  textTransform: 'uppercase',
  color: 'var(--am-grey-400)',
  marginBottom: 'var(--sp-2)',
  display: 'block'
};
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    dealership: '',
    email: '',
    phone: '',
    message: ''
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      minHeight: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "Contact"), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Schedule your",
    emphasis: "no obligation consulting call.",
    size: "h1",
    style: {
      marginTop: 'var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--sp-5)',
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body)',
      maxWidth: 460
    }
  }, "Tell us about your store and your current marketing. We'll come back with where the waste is and what we'd change first."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'grid',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:9155196592",
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      color: 'var(--am-white)',
      textDecoration: 'none',
      fontSize: 'var(--fs-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 18,
    color: "var(--am-mint)"
  }), "(915) 519-6592"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@amdealersolutions.com",
    style: {
      display: 'flex',
      gap: 'var(--sp-3)',
      alignItems: 'center',
      color: 'var(--am-white)',
      textDecoration: 'none',
      fontSize: 'var(--fs-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18,
    color: "var(--am-mint)"
  }), "info@amdealersolutions.com")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-9)'
    }
  }, /*#__PURE__*/React.createElement(MetricStrip, {
    items: [{
      value: '32.45%',
      label: 'Increase in leads'
    }, {
      value: '28.71%',
      label: 'Increase in sales'
    }]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--am-charcoal-deep)',
      borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--border-hairline)',
      padding: 'var(--sp-7)'
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: 'var(--sp-4)',
      minHeight: 380,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle-2",
    size: 40,
    color: "var(--am-mint)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "Thanks", form.name ? ', ' + form.name.split(' ')[0] : '', "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body-sm)',
      maxWidth: 320
    }
  }, "We'll be in touch within one business day to set up your consulting call."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    onClick: () => setSent(false)
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 'var(--sp-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.name,
    onChange: set('name'),
    placeholder: "Rudy Arocha"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Dealership"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.dealership,
    onChange: set('dealership'),
    placeholder: "RightDrive"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.email,
    onChange: set('email'),
    placeholder: "you@dealership.com"
  })), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: form.phone,
    onChange: set('phone'),
    placeholder: "(915) 519-6592"
  }))), /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "What are you spending on today?"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...field,
      minHeight: 120,
      resize: 'vertical'
    },
    value: form.message,
    onChange: set('message'),
    placeholder: "Vendors, monthly budget, what's working and what isn't."
  })), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    type: "submit",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Start now")))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FranchiseDealers.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  SectionHeading,
  StatCard,
  Icon,
  ServiceCard,
  FeatureRow,
  LogoWall,
  PhotoPanel,
  AccentBar
} = window.AMDealerSolutionsDesignSystem_b94def;
function FranchiseDealers({
  onNavigate,
  segment = 'Franchise Dealers'
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + 'photography/lot-suvs.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.4) brightness(.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(35,36,36,.95) 0%, rgba(35,36,36,.6) 100%)'
    }
  }), /*#__PURE__*/React.createElement(AccentBar, {
    length: 180,
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: 'var(--sp-10) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, segment), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "A marketing firm that",
    emphasis: "provides real results",
    size: "display",
    style: {
      marginTop: 'var(--sp-4)',
      maxWidth: 900
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--sp-5)',
      maxWidth: 660,
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)'
    }
  }, "We provide franchise and independent dealerships with customized strategic solutions to increase sales and profitability through marketing tactics."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)',
      display: 'flex',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "+687%",
    label: "Explosive sales surge",
    sublabel: "2018\u20132024"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "68.25%",
    label: "Advertising savings per car sold",
    tone: "mint"
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(PhotoPanel, {
    src: ASSETS + 'photography/lot-red-cars.jpg',
    ratio: "4 / 3"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "The challenges of today's dealership"), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Grosses are down.",
    emphasis: "Competition is stiff.",
    size: "h1",
    style: {
      marginTop: 'var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)',
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "layers",
    title: "A Saturated Digital Landscape"
  }, "Too many vendors, too many reports and too many variables make understanding what works hard."), /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "copy",
    title: "Generic Creative & Advertising"
  }, "Most franchise dealers have cookie cutter marketing messaging that the dealer down the road has."), /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "wallet-cards",
    title: "Wasted Ad Spend"
  }, "Are you overpaying for your third-party listing providers? Probably. We make sure you don't."))))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "Our capabilities"), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Everything a dealer needs,",
    emphasis: "under one roof",
    size: "h1",
    style: {
      marginTop: 'var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "handshake",
    title: "Vendor Management"
  }, "We will make sure that all vendors are performing to the best of their ability with your stores."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "monitor-play",
    title: "Digital Video Consulting"
  }, "We help dealers get seen at the right time with the right audience on all OTT and streaming platforms like Youtube."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "radio",
    title: "Traditional Media Consulting"
  }, "We can make your advertising more effective when buying TV, radio, outdoor and printed marketing."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "search",
    title: "SEO & SEM Consulting"
  }, "We identify keyword opportunities for bidding on and actively put SEO work into."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "thumbs-up",
    title: "Social Media Consulting"
  }, "Facebook, Instagram, Snapchat and TikTok are all platforms that dealers get wrong, we get it right."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "binoculars",
    title: "Competitors Analysis"
  }, "We identify strategies that your competitors are taking advantage of and use the information in your favor."))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Brands we",
    emphasis: "know inside out",
    size: "h2",
    align: "center",
    rule: true
  })), /*#__PURE__*/React.createElement(LogoWall, {
    tone: "light",
    columns: 9,
    rowHeight: 34,
    logos: OEM_LOGOS
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Let Us Drive Your",
    emphasis: "Auto Business Forward!",
    size: "h1",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Contact')
  }, "Get a free consultation"))));
}
Object.assign(window, {
  FranchiseDealers
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FranchiseDealers.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  SectionHeading,
  StatCard,
  AccentBar,
  Icon,
  ServiceCard,
  FeatureRow,
  MetricStrip,
  CaseStudyCard,
  LogoWall,
  Testimonial,
  PhotoPanel
} = window.AMDealerSolutionsDesignSystem_b94def;
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 620,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + 'photography/showroom-row.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.5) brightness(.55)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(35,36,36,.94) 0%, rgba(35,36,36,.72) 45%, rgba(35,36,36,.35) 100%)'
    }
  }), /*#__PURE__*/React.createElement(AccentBar, {
    length: 220,
    thickness: 14,
    style: {
      position: 'absolute',
      top: 0,
      left: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--grid-max)',
      margin: '0 auto',
      padding: '150px var(--gutter-page) 0'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "Automotive \xB7 RV \xB7 Powersports"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 0',
      fontSize: 'var(--fs-display-1)',
      lineHeight: 'var(--lh-display-1)',
      letterSpacing: 'var(--ls-display)',
      fontWeight: 'var(--fw-light)',
      color: 'var(--am-ice)'
    }
  }, "Sell More, ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 'var(--fw-bold)',
      color: 'var(--am-white)'
    }
  }, "Spend Less")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--sp-5)',
      maxWidth: 620,
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body-lg)',
      color: 'var(--text-body)'
    }
  }, "We help automotive, RV and powersports dealers sell more with tailored, result driven marketing."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)',
      display: 'flex',
      gap: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Contact')
  }, "Get a free consultation"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => onNavigate('Automotive')
  }, "See what we do"))));
}
function Home({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    style: {
      paddingTop: 'var(--sp-8)',
      paddingBottom: 'var(--sp-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      justifyContent: 'center'
    }
  }, "Proven results across top dealerships")), /*#__PURE__*/React.createElement(LogoWall, {
    columns: 6,
    rowHeight: 44,
    logos: CLIENT_LOGOS
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "Our services"), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "What We Do to",
    emphasis: "Drive Results",
    size: "h1",
    style: {
      marginTop: 'var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "target",
    title: "SEM"
  }, "Our industry leading search engine marketing services are designed to increase leads and eliminate waste, maximizing budget efficiency."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "search",
    title: "SEO"
  }, "Increase your website rankings for the highest converting keywords in your market and surpass your competitors from organic search."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "car-front",
    title: "Vehicle Listings Ads (VLAs)"
  }, "Our bread and butter. We optimize your inventory feed to give your VLAs maximum visibility and segment your inventory for advantage."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "thumbs-up",
    title: "Social Media Inventory Ads"
  }, "We use your CRM sold customer data to show exactly how many sales were attributed to our social media ads."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "music",
    title: "TikTok Inventory Ads"
  }, "TikTok has become one of the largest search engines in the world. We maximize eyeballs on your inventory to in-market audiences."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "languages",
    title: "Hispanic Marketing"
  }, "Culturally relevant, bilingual strategies that connect brands with Hispanic audiences and drive authentic engagement."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "bar-chart-3",
    title: "Advanced Analytics Reporting"
  }, "We break down and analyze every dollar spent, providing a clear ROI. Know exactly what performs and why."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "monitor-play",
    title: "Streaming Ads"
  }, "Targeted video advertising across digital platforms like streaming services and apps."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "clipboard-list",
    title: "Social Media Lead Gen Ads"
  }, "Capture customers inside the platform with targeted campaigns and built-in forms.")), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 'var(--sp-9)',
      marginBottom: 'var(--sp-5)',
      fontSize: 'var(--fs-h3)',
      fontWeight: 'var(--fw-bold)'
    }
  }, "Consulting Services:"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "database",
    title: "CRM Analysis"
  }, "We analyze your CRM processes to help you uncover more opportunities and dial in your lead handling process."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "wallet",
    title: "Coop Services"
  }, "We help you maximize your coop dollars by submitting any covered services that we provide."), /*#__PURE__*/React.createElement(ServiceCard, {
    icon: "handshake",
    title: "Vendor Management"
  }, "We analyze third party vendors and partners to eliminate waste and negotiate on your behalf."))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--sp-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "The AMDS difference"), /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "A true partner,",
    emphasis: "not another vendor",
    size: "h1",
    style: {
      marginTop: 'var(--sp-4)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)',
      display: 'grid',
      gap: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "unlock",
    title: "Unparalleled Access"
  }, "Think of us like you just hired 10 marketing experts along with a dedicated Marketing Director. Direct line of communication allows us to pivot fast."), /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "settings-2",
    title: "Customized Marketing Strategies"
  }, "Built on your specific dealer infrastructure, dealer goals, competitive landscape, and market area."), /*#__PURE__*/React.createElement(FeatureRow, {
    icon: "store",
    title: "Dealer First Mentality"
  }, "We've actually built dealerships from the ground up and understand the unique challenges dealers face when scaling."))), /*#__PURE__*/React.createElement(PhotoPanel, {
    src: ASSETS + 'photography/handshake-keys.jpg',
    ratio: "4 / 5"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "In the first 60 days our dealers average"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(MetricStrip, {
    items: [{
      value: '32.45%',
      label: 'Increase in leads'
    }, {
      value: '28.71%',
      label: 'Increase in sales'
    }, {
      value: '38.60%',
      label: 'Saved in wasted ad spend'
    }]
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "deep"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Proven Success",
    emphasis: "in Action",
    size: "h1",
    align: "center",
    rule: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 'var(--sp-5) auto 0',
      maxWidth: 620,
      color: 'var(--text-body)',
      fontSize: 'var(--fs-body)'
    }
  }, "See how our strategies have transformed dealerships and delivered measurable growth")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-8)',
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 'var(--grid-gap)'
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    image: ASSETS + 'case-studies/rightdrive-lot.png',
    client: "Right Drive"
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    image: ASSETS + 'case-studies/viva-lot.png',
    client: "Viva Auto Group"
  }), /*#__PURE__*/React.createElement(CaseStudyCard, {
    image: ASSETS + 'case-studies/crawford-lot.png',
    client: "Crawford Buick GMC"
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.2fr',
      gap: 'var(--sp-10)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    bar: true
  }, "Testimonials"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-6)'
    }
  }, /*#__PURE__*/React.createElement(LogoWall, {
    tone: "light",
    columns: 6,
    rowHeight: 26,
    logos: OEM_LOGOS.slice(0, 12)
  }))), /*#__PURE__*/React.createElement(Testimonial, {
    quote: "Working with AM Dealer Solutions was a game-changer for our store. They cut our ad spend by nearly 20%, but more importantly, our sales jumped within the first 60 days. Their team truly understands the dealership grind and delivers strategies that actually work.",
    name: "Anonymus Client",
    meta: "2024",
    avatar: ASSETS + 'logo/am-logo-light.png'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ASSETS + 'photography/dealership-dusk.jpg',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.5) brightness(.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--surface-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      textAlign: 'center',
      padding: 'var(--sp-10) var(--gutter-page)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    lead: "Fill Out The Form Below to Schedule Your",
    emphasis: "No Obligation Consulting Call.",
    size: "h1",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--sp-7)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => onNavigate('Contact')
  }, "Start now")))));
}
Object.assign(window, {
  Home,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
const A = '../../assets/';
function Section({
  children,
  tone = 'dark',
  style
}) {
  const bg = tone === 'light' ? 'var(--am-grey-100)' : tone === 'deep' ? 'var(--am-charcoal-deep)' : 'var(--am-charcoal)';
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: 'var(--section-y) var(--gutter-page)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--grid-max)',
      margin: '0 auto'
    }
  }, children));
}
const CLIENT_LOGOS = [{
  src: A + 'clients/rightdrive.png',
  alt: 'RightDrive'
}, {
  src: A + 'clients/viva-auto-group.png',
  alt: 'Viva Auto Group'
}, {
  src: A + 'clients/fiesta-auto-group.png',
  alt: 'Fiesta Auto Group'
}, {
  src: A + 'clients/garcia-automotive-group.png',
  alt: 'Garcia Automotive Group'
}, {
  src: A + 'clients/crawford-buick-gmc.png',
  alt: 'Crawford Buick GMC'
}, {
  src: A + 'clients/4m-autoplex.png',
  alt: '4M Autoplex'
}, {
  src: A + 'clients/casa.png',
  alt: 'Casa'
}, {
  src: A + 'clients/martin-automotive-group.png',
  alt: 'Martin Automotive Group'
}, {
  src: A + 'clients/flagstaff-buick-gmc.png',
  alt: 'Flagstaff Buick GMC'
}, {
  src: A + 'clients/vision-ford.png',
  alt: 'Vision Ford'
}, {
  src: A + 'clients/lake-powell-ford.png',
  alt: 'Lake Powell Ford'
}];
const OEM_LOGOS = ['ford', 'chevrolet', 'gmc', 'buick', 'nissan', 'kia', 'mazda', 'jeep', 'ram', 'dodge', 'chrysler', 'infiniti', 'land-rover', 'jaguar', 'mitsubishi', 'honda', 'ducati', 'kawasaki'].map(n => ({
  src: A + 'oem/' + n + '.png',
  alt: n
}));
Object.assign(window, {
  Section,
  CLIENT_LOGOS,
  OEM_LOGOS,
  ASSETS: A
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccentBar = __ds_scope.AccentBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LogoBadge = __ds_scope.LogoBadge;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.MetricStrip = __ds_scope.MetricStrip;

__ds_ns.PhotoPanel = __ds_scope.PhotoPanel;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Testimonial = __ds_scope.Testimonial;

})();
