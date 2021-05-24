// PROJECT_ROOT/src/StyleGuideWrapper.js 

import GlobalStyles from './GlobalStyles';
function StyleGuideWrapper({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}
export default StyleGuideWrapper;