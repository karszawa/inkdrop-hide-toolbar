'use babel';

import InkdropHideToolbarMessageDialog from './inkdrop-hide-toolbar-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropHideToolbarMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'InkdropHideToolbarMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'InkdropHideToolbarMessageDialog'
    )
    inkdrop.components.deleteClass(InkdropHideToolbarMessageDialog);
  }

};
