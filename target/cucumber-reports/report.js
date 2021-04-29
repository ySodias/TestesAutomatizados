$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Admin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 4,
  "name": "Admin",
  "description": "",
  "id": "admin",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "line": 3,
      "name": "@Admin"
    },
    {
      "line": 3,
      "name": "@End2End"
    }
  ]
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 10,
      "name": "@PesquisarUsuario"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca Username como \"\u003cusuario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca User Role como \"\u003cperfil\u003e\"\"",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Employee Name como \"\u003cnomeFuncionario\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo de busca Status como \"\u003csituacao\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "admin;pesquisar-usuario;",
  "rows": [
    {
      "cells": [
        "usuario",
        "perfil",
        "nomeFuncionario",
        "situacao"
      ],
      "line": 21,
      "id": "admin;pesquisar-usuario;;1"
    },
    {
      "cells": [
        "Admin",
        "Admin",
        "Christine Tarabay",
        "Enabled"
      ],
      "line": 22,
      "id": "admin;pesquisar-usuario;;2"
    },
    {
      "cells": [
        "Aaliyah.Haq",
        "ESS",
        "Aaliyah Haq",
        "Enabled"
      ],
      "line": 23,
      "id": "admin;pesquisar-usuario;;3"
    },
    {
      "cells": [
        "Aatmaram",
        "ESS",
        "Alice Duval",
        "Enabled"
      ],
      "line": 24,
      "id": "admin;pesquisar-usuario;;4"
    }
  ],
  "keyword": "Exemplos"
});
formatter.before({
  "duration": 2085571700,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2018147100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 2813162800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 10,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 3,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca Username como \"Admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca User Role como \"Admin\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Employee Name como \"Christine Tarabay\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 979711300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 120238900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 118887300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Christine Tarabay",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 138263500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 107830300,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 453537100,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 45277500,
  "status": "passed"
});
formatter.after({
  "duration": 692129400,
  "status": "passed"
});
formatter.before({
  "duration": 1358344000,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2676704900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3310471000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 10,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 3,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca Username como \"Aaliyah.Haq\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca User Role como \"ESS\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Employee Name como \"Aaliyah Haq\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1095045500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aaliyah.Haq",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 117071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 102184700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aaliyah Haq",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 127251300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 124234500,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 501632800,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 72311000,
  "status": "passed"
});
formatter.after({
  "duration": 694197100,
  "status": "passed"
});
formatter.before({
  "duration": 1341122800,
  "status": "passed"
});
formatter.background({
  "line": 6,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 7,
  "name": "que o usuario esteja na pagina principal do sistema",
  "keyword": "Dado "
});
formatter.step({
  "line": 8,
  "name": "que usuario esteja logado",
  "keyword": "E "
});
formatter.match({
  "location": "LoginSteps.que_o_usuario_esteja_na_pagina_principal_do_sistema()"
});
formatter.result({
  "duration": 2578951900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.que_usuario_esteja_logado()"
});
formatter.result({
  "duration": 3069681300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Pesquisar Usuario",
  "description": "",
  "id": "admin;pesquisar-usuario;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 3,
      "name": "@End2End"
    },
    {
      "line": 10,
      "name": "@PesquisarUsuario"
    },
    {
      "line": 3,
      "name": "@Admin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "acionar o menu Admin",
  "keyword": "Quando "
});
formatter.step({
  "line": 13,
  "name": "informar o campo de busca Username como \"Aatmaram\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "informar o campo de busca User Role como \"ESS\"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "informar o campo de busca Employee Name como \"Alice Duval\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "informar o campo de busca Status como \"Enabled\"",
  "matchedColumns": [
    3
  ],
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "clicar no botao Search",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "o sistema devera apresentar lista com o resultado da busca de acordo com os filtros",
  "keyword": "Entao "
});
formatter.match({
  "location": "AdminSteps.acionar_o_menu_Admin()"
});
formatter.result({
  "duration": 1362371200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Aatmaram",
      "offset": 41
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Username_como(String)"
});
formatter.result({
  "duration": 108931500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ESS",
      "offset": 42
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_User_Role_como(String)"
});
formatter.result({
  "duration": 104646700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alice Duval",
      "offset": 46
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Employee_Name_como(String)"
});
formatter.result({
  "duration": 121042700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Enabled",
      "offset": 39
    }
  ],
  "location": "AdminSteps.informar_o_campo_de_busca_Status_como(String)"
});
formatter.result({
  "duration": 123260400,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.clicar_no_botao_Search()"
});
formatter.result({
  "duration": 496341000,
  "status": "passed"
});
formatter.match({
  "location": "AdminSteps.o_sistema_devera_apresentar_lista_com_o_resultado_da_busca_de_acordo_com_os_filtros()"
});
formatter.result({
  "duration": 68737700,
  "status": "passed"
});
formatter.after({
  "duration": 663921400,
  "status": "passed"
});
});