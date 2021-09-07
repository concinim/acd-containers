import React from 'react';
import ResourceLinks from 'gatsby-theme-carbon/src/components/LeftNav/ResourceLinks';

const links = [
  {
    title: 'Github',
    href: 'https://github.com/IBM/acd-containers',
  },
//  {
//    title: 'Knowledge Center',
//    href: 'https://www.ibm.com/support/knowledgecenter/SS8S5A_7.0.10/com.ibm.curam.nav.doc/spm_welcome.html',
//  },
  {
    title: 'Change Log',
    href: 'https://github.com/IBM/acd-containers/blob/dcw/CHANGELOG.md',
  }
];

// shouldOpenNewTabs: true if outbound links should open in a new tab
const CustomResources = () => <ResourceLinks shouldOpenNewTabs links={links} />;

export default CustomResources;
