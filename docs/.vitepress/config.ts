import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Mão na Massa',
  description: 'Documentação Oficial do Sistema',

  themeConfig: {
    nav: [
      { text: 'Início', link: '/index' },
      { text: 'Introdução', link: '/introducao' },
      { text: 'Descrição', link: '/descricao' },
      { text: 'Protótipos', link: '/prototipos' },

    ],

    sidebar: [
      {
        text: 'Documentação do Projeto',
        items: [
          { text: '1. Introdução', link: '/introducao' },
          { text: '2. Descrição do Projeto', link: '/descricao' },
          { text: '3. Recursos e Funcionalidades', link: '/recursos' },
          { text: '4. Diagrama de Caso de Uso', link: '/casosdeuso' },
          { text: '5. Diagrama de Classes', link: '/diagramadeclasses' },
          { text: '6. Protótipos de Telas', link: '/prototipos' },
          { text: '7. Cronograma e Entrega', link: '/cronograma' },
          { text: '8. Riscos e Mitigação', link: '/riscos' },
          { text: '9. Custos e Orçamento', link: '/custos' },
          { text: '10. Considerações Finais', link: '/consideracoes' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lightdsgn/maonamassa' },
    ],
  },
});

