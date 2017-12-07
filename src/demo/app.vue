<template>
<div id="app">
  <ul>
    <li>
      <router-link to="/metadata/cc9e1df3-f292-496d-a754-6681d5260d54">/iasi</router-link>
    </li>
    <li>
      <router-link to="/metadata/575882c0-64ce-4648-bb19-00030d5d63af">/iagos</router-link>
    </li>
    <li>
      <router-link to="/metadata/61e54760-86ba-4b69-804b-06a7793f9104">/iagos2</router-link>
    </li>
    <li>
      <router-link to="/metadata/bcb74d91-d6ea-4f83-a897-f98f8edc044c">/gmos</router-link>
    </li>
    <li>
      <router-link to="/metadata/a8d2dfb6-b3e4-7885-9825-e4ea0e0f485e">/escompte</router-link>
    </li>
    <li>
      <router-link to="/quicklook-gallery">/quicklook-gallery</router-link>
    </li>
  </ul>
  <div>
    <router-view class="view"></router-view>
  </div>
</div>
</template>
