<template>
  <div id="app">
    <ul>
      <li><router-link to="/contacts">/contacts</router-link></li>
      <li><router-link to="/data-links">/data-links</router-link></li>
      <li><router-link to="/datapolicy">/datapolicy</router-link></li>
      <li><router-link to="/description">/description</router-link></li>
      <li><router-link to="/information-links">/information-links</router-link></li>
      <li><router-link to="/international-field">/international-field</router-link></li>
      <li><router-link to="/temporal-extents">/temporal-extents</router-link></li>
      <li><router-link to="/formats">/formats</router-link></li>
      <li><router-link to="/modifications">/modifications</router-link></li>
      <li><router-link to="/spatial-extents">/spatial-extents</router-link></li>
      <li><router-link to="/parameters">/parameters</router-link></li>
      <li><router-link to="/ui-table">/ui-table</router-link></li>
      <li><router-link to="/year-select-download">/year-select-download</router-link></li>
      <li><router-link to="/metadata/cc9e1df3-f292-496d-a754-6681d5260d54">/iasi</router-link></li>
      <li><router-link to="/metadata/575882c0-64ce-4648-bb19-00030d5d63af">/iagos</router-link></li>
      <li><router-link to="/metadata/61e54760-86ba-4b69-804b-06a7793f9104">/iagos2</router-link></li>
      <li><router-link to="/metadata/bcb74d91-d6ea-4f83-a897-f98f8edc044c">/gmos</router-link></li>
      <li><router-link to="/metadata/045632bf-fadb-41fa-b09d-e66365b1c08a">/escompte</router-link></li>
      <li><router-link to="/metadata/88343406-2d0b-388e-9cf7-61c020170f3d">/metadata-citations</router-link></li>
      <li><router-link to="/quicklook-gallery">/quicklook-gallery</router-link></li>
      <li><router-link to="/aeris-metadata-synthesis">/aeris-metadata-synthesis</router-link></li>
    </ul>
    <div><router-view class="view"></router-view></div>
  </div>
</template>
