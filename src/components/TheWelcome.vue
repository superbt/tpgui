<script setup xmlns="http://www.w3.org/1999/html">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'

/**
 * vue demos
 */

import  vue01 from './demo/vue01.vue'
import  vue02 from './demo/vue02.vue'
import  vue03 from './demo/vue03.vue'
//import  vue04 from './demo/vue04.vue'  //失败
import  vue05 from './demo/vue05.vue'

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentation </template>

     s1
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Tooling</template>
    s2
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Ecosystem</template>
     s3
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Community</template>

       s4
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>demo</template>
    <a>vue1</a>
    <vue01></vue01> <br><hr>
    <vue02></vue02> <br><hr>
    <vue03></vue03> <br><hr>
    <vue05></vue05> <br><hr>



  </WelcomeItem>
</template>
