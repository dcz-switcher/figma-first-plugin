
const UIDimensions = {width: 330, height: 500};

const EYE = { default: '<svg></svg>', twink: '<svg></svg>', smile: '<svg></svg>'};
const MOUTH = { default: '<svg></svg>', twink: '<svg></svg>', smile: '<svg></svg>'};
const NOSE = { default: '<svg></svg>', small: '<svg></svg>', long: '<svg></svg>'};
const HAIR = { default: '<svg></svg>', short: '<svg></svg>', long: '<svg></svg>'};
const CLOTHE = { default: '<svg></svg>', tshirt: '<svg></svg>', polo: '<svg></svg>'};
const AVATAR : string = '<svg width="97" height="110" viewBox="0 0 97 110" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="preview-head" fill-rule="evenodd" clip-rule="evenodd" d="M8.19697 36.0053C10.2014 15.7895 27.2568 0 48 0C68.751 0 85.8113 15.8013 87.8053 36.028C88.0344 36.0094 88.2661 36 88.5 36C93.1944 36 97 39.8056 97 44.5V51.5C97 56.1944 93.1944 60 88.5 60C88.3322 60 88.1654 59.9951 88 59.9855V70C88 92.0914 70.0914 110 48 110C25.9086 110 8 92.0914 8 70V59.9855C3.53831 59.7267 0 56.0266 0 51.5V44.5C0 39.907 3.6429 36.1649 8.19697 36.0053Z" fill="#FFCF37"/></svg>';

const SKIN_COLORS = { skinColor1: "#5396FA", skinColor2: "#FFCF37", skinColor3: "#F6D3B5", skinColor4: "#EDB893", skinColor5: "#916441", skinColor6 : "#402E23"};


const HEAD = '<svg width="98" height="108" viewBox="0 0 98 108" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.0182 39.0711C10.0182 17.4927 27.511 0 49.0894 0C70.6678 0 88.1605 17.4927 88.1605 39.0711V40.3612C93.6109 40.4564 98 44.8964 98 50.3596C98 55.8229 93.6109 60.2629 88.1605 60.3581V68.9289C88.1605 90.5073 70.6678 108 49.0894 108C27.511 108 10.0182 90.5073 10.0182 68.9289V60C4.48532 60 0 55.5228 0 50C0 44.4772 4.48532 40 10.0182 40V39.0711Z" fill="#F3C09A"/></svg>';
const EYE_1 = '<svg width="62" height="36" viewBox="0 0 62 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5.11731" y="1.70374" width="22" height="32" rx="11" fill="white"/><rect x="36" y="2" width="22" height="32" rx="11" fill="white"/><rect x="13.0432" y="9.62964" width="10" height="16" rx="5" fill="#434243"/><rect x="39.963" y="9.9259" width="10" height="16" rx="5" fill="#434243"/></svg>';

// This shows the HTML page in "ui.html".
figma.showUI(__html__, UIDimensions);


figma.ui.onmessage = msg => {
/*
  if (msg.type === 'create-rectangles') {
    const nodes: SceneNode[] = [];
    for (let i = 0; i < msg.count; i++) {
      const rect = figma.createRectangle();
      rect.x = i * 150;
      rect.name = "Rectangle_" + i;
      rect.fills = [{type: 'SOLID', color: {r: 0.82, g: 0.7, b: 0.55}}];
      figma.currentPage.appendChild(rect);
      nodes.push(rect);
    }
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);
  }
  */
  if (msg.type === 'create-avatar'){
    console.log('create avatar with skin color ' + msg.skinColor);
    
    const avatarNode : FrameNode = figma.createNodeFromSvg(HEAD);
    avatarNode.name = "Avatar";
    
    const head : VectorNode = avatarNode.children[0] as VectorNode;
    head.name = "Head";
    //head.fills = [{type: 'SOLID', color: {r: 1, g: 0.7, b: 0.55}}];

    figma.currentPage.appendChild(avatarNode);

    /** add subNode */
    /*const eye = figma.createRectangle();
    eye.name = "Eye";
    eye.resize(10, 10);
    eye.x = 30;
    eye.y = 40;
    eye.fills = [{type: 'SOLID', color: {r: 0, g: 0, b: 0}}];
    eye.cornerRadius = 40;
    console.log(eye.constraints);
    eye.constraints = {horizontal: "SCALE", vertical : "SCALE"};

    avatarNode.appendChild(eye);
    */
    /** add eye */
    const eyeNode : FrameNode = figma.createNodeFromSvg(EYE_1);
    eyeNode.name = "Eye";
    eyeNode.constraints = {horizontal: "SCALE", vertical: "SCALE"};
    eyeNode.x = 18;
    eyeNode.y = 30;

    avatarNode.appendChild(eyeNode);

    /** center camera on new FrameNode inserted */
    const nodes : SceneNode[] = [];
    nodes.push(avatarNode);
    figma.currentPage.selection = nodes;
    figma.viewport.scrollAndZoomIntoView(nodes);


  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};

function clone(val) {
  return JSON.parse(JSON.stringify(val))
}