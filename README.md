# @agro1/react-components

Biblioteca de componentes para REACT. Para a instalação é necessário adicionar o arquivo `.npmrc` de acordo com a documentação do pulpo: https://app.pulpo.work/MaZnZKxL6NugQcGnT/documents/247cf6277fe543f5a540d737102b0e82/utilizar-github-packages-privados

```
yarn add @agro1desenvolvimento/react-components
```

## Biblioteca utilitária de CSS (Grid, Flexbox...)

[PrimeFlex](https://primefaces.org/primereact/showcase/#/primeflex)

## Componentes

**Atenção!!!** Nunca importar os componentes diretamente do  `primereact`, sempre importar de `@agro1/react-components`.

- [Accordion](https://primefaces.org/primereact/showcase/#/accordion)
- [AutoComplete](https://primefaces.org/primereact/showcase/#/autocomplete)
- [BreadCrumb](https://primefaces.org/primereact/showcase/#/breadcrumb)
- [Button](https://primefaces.org/primereact/showcase/#/button)
- [Calendar](https://primefaces.org/primereact/showcase/#/calendar)
- [Captcha](https://primefaces.org/primereact/showcase/#/captcha)
- [Card](https://primefaces.org/primereact/showcase/#/card)
- [Carousel](https://primefaces.org/primereact/showcase/#/carousel)
- [Checkbox](https://primefaces.org/primereact/showcase/#/checkbox)
- [Chips](https://primefaces.org/primereact/showcase/#/chips)
- [ColorPicker](https://primefaces.org/primereact/showcase/#/colorpicker)
- [Column](https://primefaces.org/primereact/showcase/#/column)
- [ColumnGroup](https://primefaces.org/primereact/showcase/#/columngroup)
- [ContextMenu](https://primefaces.org/primereact/showcase/#/contextmenu)
- [DataScroller](https://primefaces.org/primereact/showcase/#/datascroller)
- [DataTable](https://primefaces.org/primereact/showcase/#/datatable)
- [DataView](https://primefaces.org/primereact/showcase/#/dataview)
- [DeferredContent](https://primefaces.org/primereact/showcase/#/deferredcontent)
- [Dialog](https://primefaces.org/primereact/showcase/#/dialog)
- [Dropdown](https://primefaces.org/primereact/showcase/#/dropdown)
- [Fieldset](https://primefaces.org/primereact/showcase/#/fieldset)
- [FileUpload](https://primefaces.org/primereact/showcase/#/fileupload)
- [Galleria](https://primefaces.org/primereact/showcase/#/galleria)
- [Inplace](https://primefaces.org/primereact/showcase/#/inplace)
- [InputMask](https://primefaces.org/primereact/showcase/#/inputmask)
- [InputNumber](https://primefaces.org/primereact/showcase/#/inputnumber)
- [InputSwitch](https://primefaces.org/primereact/showcase/#/inputswitch)
- [InputText](https://primefaces.org/primereact/showcase/#/inputtext)
- [InputTextarea](https://primefaces.org/primereact/showcase/#/inputtextarea)
- [ListBox](https://primefaces.org/primereact/showcase/#/listbox)
- [MegaMenu](https://primefaces.org/primereact/showcase/#/megamenu)
- [Menu](https://primefaces.org/primereact/showcase/#/menu)
- [Menubar](https://primefaces.org/primereact/showcase/#/menubar)
- [Message](https://primefaces.org/primereact/showcase/#/message)
- [Messages](https://primefaces.org/primereact/showcase/#/messages)
- [MultiSelect](https://primefaces.org/primereact/showcase/#/multiselect)
- [OrderList](https://primefaces.org/primereact/showcase/#/orderlist)
- [OrganizationChart](https://primefaces.org/primereact/showcase/#/organizationchart)
- [OverlayPanel](https://primefaces.org/primereact/showcase/#/overlaypanel)
- [Paginator](https://primefaces.org/primereact/showcase/#/paginator)
- [Panel](https://primefaces.org/primereact/showcase/#/panel)
- [PanelMenu](https://primefaces.org/primereact/showcase/#/panelmenu)
- [Password](https://primefaces.org/primereact/showcase/#/password)
- [PickList](https://primefaces.org/primereact/showcase/#/picklist)
- [ProgressBar](https://primefaces.org/primereact/showcase/#/progressbar)
- [ProgressSpinner](https://primefaces.org/primereact/showcase/#/progressspinner)
- [RadioButton](https://primefaces.org/primereact/showcase/#/radiobutton)
- [Rating](https://primefaces.org/primereact/showcase/#/rating)
- [Ripple](https://primefaces.org/primereact/showcase/#/ripple)
- [Row](https://primefaces.org/primereact/showcase/#/row)
- [ScrollPanel](https://primefaces.org/primereact/showcase/#/scrollpanel)
- [SelectButton](https://primefaces.org/primereact/showcase/#/selectbutton)
- [Sidebar](https://primefaces.org/primereact/showcase/#/sidebar)
- [SlideMenu](https://primefaces.org/primereact/showcase/#/slidemenu)
- [Slider](https://primefaces.org/primereact/showcase/#/slider)
- [SplitButton](https://primefaces.org/primereact/showcase/#/splitbutton)
- [Steps](https://primefaces.org/primereact/showcase/#/steps)
- [TabMenu](https://primefaces.org/primereact/showcase/#/tabmenu)
- [TabView](https://primefaces.org/primereact/showcase/#/tabview)
- [TieredMenu](https://primefaces.org/primereact/showcase/#/tieredmenu)
- [Toast](https://primefaces.org/primereact/showcase/#/toast)
- [ToggleButton](https://primefaces.org/primereact/showcase/#/togglebutton)
- [Toolbar](https://primefaces.org/primereact/showcase/#/toolbar)
- [Tooltip](https://primefaces.org/primereact/showcase/#/tooltip)
- [Tree](https://primefaces.org/primereact/showcase/#/tree)
- [TreeTable](https://primefaces.org/primereact/showcase/#/treetable)
- [TriStateCheckbox](https://primefaces.org/primereact/showcase/#/tristatecheckbox)


## Exemplo

```javascript
import React from 'react';
import './App.css';

import { Button, Card } from '@agro1/react-components';

function App() {
  return (
    <div className="example">
      <Card>
        <Button label="Click me" className="p-button-success" />
      </Card>
    </div>
  );
}

export default App;
```


## Example-app
No diretório `example-app` existe uma aplicação REACT "fake", só deve ser utilizada para algum teste.

## Publicar
Deve ser criado um novo `release` no GitHub, tem uma action para fazer a publicação automaticamente.

## TODO
- [ ] Adicionar configuração para testes
