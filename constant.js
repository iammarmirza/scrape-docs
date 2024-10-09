export const config = [
  {
    type: "section",
    label: "Home",
    pages: [
      {
        type: "page",
        path: "/docs/introduction",
      },
      {
        type: "page",
        path: "/docs/quickstart",
        pages: [
          {
            type: "page",
            path: "/docs/quickstart-create-an-account",
          },
          {
            type: "page",
            path: "/docs/quickstart-run-first-analysis",
          },
          {
            type: "page",
            path: "/docs/quickstart-fix-issues",
          },
          {
            type: "page",
            path: "/docs/quickstart-activate-new-repositories",
          },
          {
            type: "page",
            path: "/docs/quickstart-invite-team-members",
          },
          {
            type: "page",
            path: "/docs/quickstart-auto-onboard",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/configuration",
      },
      {
        type: "page",
        path: "/docs/analyzers",
        pages: [
          {
            type: "page",
            path: "/docs/analyzers-python",
          },
          {
            type: "page",
            path: "/docs/analyzers-ansible",
          },
          {
            type: "page",
            path: "/docs/analyzers-c",
          },
          {
            type: "page",
            path: "/docs/analyzers-c-c",
          },
          {
            type: "page",
            path: "/docs/analyzers-docker",
          },
          {
            type: "page",
            path: "/docs/analyzers-java",
          },
          {
            type: "page",
            path: "/docs/analyzers-javascript",
          },
          {
            type: "page",
            path: "/docs/analyzers-php",
          },
          {
            type: "page",
            path: "/docs/analyzers-ruby",
          },
          {
            type: "page",
            path: "/docs/analyzers-rust",
          },
          {
            type: "page",
            path: "/docs/analyzers-scala",
          },
          {
            type: "page",
            path: "/docs/analyzers-secrets",
          },
          {
            type: "page",
            path: "/docs/analyzers-shell",
          },
          {
            type: "page",
            path: "/docs/analyzers-sql",
          },
          {
            type: "page",
            path: "/docs/analyzers-terraform",
          },
          {
            type: "page",
            path: "/docs/analyzers-test-coverage",
          },
          {
            type: "page",
            path: "/docs/analyzers-go",
          },
          {
            type: "page",
            path: "/docs/analyzers-swift",
          },
          {
            type: "page",
            path: "/docs/analyzers-kotlin",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/community-analyzers",
      },
      {
        type: "page",
        path: "/docs/transformers",
        pages: [
          {
            type: "page",
            path: "/docs/transformers-autopep8",
          },
          {
            type: "page",
            path: "/docs/transformers-black",
          },
          {
            type: "page",
            path: "/docs/transformers-isort",
          },
          {
            type: "page",
            path: "/docs/transformers-gofmt",
          },
          {
            type: "page",
            path: "/docs/transformers-gofumpt",
          },
          {
            type: "page",
            path: "/docs/transformers-rustfmt",
          },
          {
            type: "page",
            path: "/docs/transformers-prettier",
          },
          {
            type: "page",
            path: "/docs/transformers-rubocop",
          },
          {
            type: "page",
            path: "/docs/transformers-scalafmt",
          },
          {
            type: "page",
            path: "/docs/transformers-standardjs",
          },
          {
            type: "page",
            path: "/docs/transformers-standardrb",
          },
          {
            type: "page",
            path: "/docs/transformers-yapf",
          },
          {
            type: "page",
            path: "/docs/transformers-google-java-format",
          },
          {
            type: "page",
            path: "/docs/transformers-dotnet-format",
          },
          {
            type: "page",
            path: "/docs/transformers-clang-format",
          },
          {
            type: "page",
            path: "/docs/transformers-php-cs-fixer",
          },
          {
            type: "page",
            path: "/docs/transformers-ktlint",
          },
          {
            type: "page",
            path: "/docs/transformers-swift-format",
          },
          {
            type: "page",
            path: "/docs/transformers-ruff-formatter",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/issues",
      },
      {
        type: "page",
        path: "/docs/metrics",
      },
      {
        type: "page",
        path: "/docs/autofix",
      },
    ],
  },
  {
    type: "section",
    label: "Dashboard",
    pages: [
      {
        type: "page",
        path: "/docs/dashboard-account-management",
      },
      {
        type: "page",
        path: "/docs/team-view",
        pages: [
          {
            type: "page",
            path: "/docs/team-view-home",
          },
          {
            type: "page",
            path: "/docs/team-view-repositories",
          },
          {
            type: "page",
            path: "/docs/team-view-reports",
          },
          {
            type: "page",
            path: "/docs/team-view-members",
          },
          {
            type: "page",
            path: "/docs/team-view-settings",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/repository-view",
        pages: [
          {
            type: "page",
            path: "/docs/repository-view-overview",
          },
          {
            type: "page",
            path: "/docs/repository-view-issues",
          },
          {
            type: "page",
            path: "/docs/repository-view-metrics",
          },
          {
            type: "page",
            path: "/docs/repository-view-reports",
          },
          {
            type: "page",
            path: "/docs/repository-view-history",
          },
          {
            type: "page",
            path: "/docs/repository-view-repository-settings",
          },
          {
            type: "page",
            path: "/docs/repository-view-monorepos",
          },
        ],
      },
    ],
  },
  {
    type: "section",
    label: "Integrations",
    pages: [
      {
        type: "page",
        path: "/docs/integrations-slack",
      },
      {
        type: "page",
        path: "/docs/integrations-jira",
      },
      {
        type: "page",
        path: "/docs/integrations-vanta",
      },
      {
        type: "page",
        path: "/docs/integrations-sso",
        pages: [
          {
            type: "page",
            path: "/docs/sso-saml-sso-scim-okta",
          },
          {
            type: "page",
            path: "/docs/sso-saml-sso-scim-onelogin",
          },
          {
            type: "page",
            path: "/docs/sso-saml-sso-scim-azure-ad",
          },
          {
            type: "page",
            path: "/docs/saml-sso-scim-google-workspace",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/integrations-vs-code",
      },
    ],
  },
  {
    type: "section",
    label: "Enterprise Server",
    pages: [
      {
        type: "page",
        path: "/docs/enterprise-server-overview",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-requirements",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-installation",
        pages: [
          {
            type: "page",
            path: "/docs/installation-standalone-cluster",
          },
          {
            type: "page",
            path: "/docs/installation-existing-kubernetes-cluster",
          },
          {
            type: "page",
            path: "/docs/airgapped-installation",
          },
          {
            type: "page",
            path: "/docs/helm",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/enterprise-server-vcs-integrations",
        pages: [
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-gh",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-gitlab",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-google-source-repositories",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-bitbucket-cloud",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-bitbucket-datacenter",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-vcs-integrations-azure-devops-services",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/enterprise-server-configuration",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-enterprise-upgrade-guide",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-control-panel",
        pages: [
          {
            type: "page",
            path: "/docs/enterprise-server-control-panel-user-management",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-control-panel-scim-provisioning-on-okta",
          },
          {
            type: "page",
            path: "/docs/enterprise-server-control-panel-license",
          },
        ],
      },
      {
        type: "page",
        path: "/docs/enterprise-server-integration-jira-cloud",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-integration-slack",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-troubleshooting",
      },
      {
        type: "page",
        path: "/docs/enterprise-server-frequently-asked-questions",
      },
    ],
  },
  {
    type: "section",
    label: "Developers",
    pages: [
      {
        type: "page",
        path: "/docs/cli",
      },
      {
        type: "page",
        path: "/docs/webhooks",
      },
      {
        type: "page",
        path: "/docs/api",
        pages: [
          {
            type: "page",
            path: "/docs/apis-personal-access-token",
          },
          {
            type: "page",
            path: "/docs/apis-viewer",
          },
          {
            type: "page",
            path: "/docs/apis-account",
          },
          {
            type: "page",
            path: "/docs/apis-team",
          },
          {
            type: "page",
            path: "/docs/apis-repository",
          },
          {
            type: "page",
            path: "/docs/apis-check",
          },
          {
            type: "page",
            path: "/docs/apis-analysis-run",
          },
          {
            type: "page",
            path: "/docs/apis-analyzer",
          },
          {
            type: "page",
            path: "/docs/apis-transformer",
          },
          {
            type: "page",
            path: "/docs/apis-issue",
          },
          {
            type: "page",
            path: "/docs/apis-metric",
          },
          {
            type: "page",
            path: "/docs/apis-reference-enums",
          },
          {
            type: "page",
            path: "/docs/apis-reference-scalars",
          },
          {
            type: "page",
            path: "/docs/apis-reference-pagination",
          },
          {
            type: "page",
            path: "/docs/apis-reports",
          },
        ],
      },
    ],
  },
  {
    type: "section",
    label: "Help",
    pages: [
      {
        type: "page",
        path: "/docs/help-frequently-asked-questions",
      },
      {
        type: "page",
        path: "/docs/help-troubleshooting",
      },
      {
        type: "page",
        path: "/docs/help-support",
      },
      {
        type: "page",
        path: "/docs/help-permissions",
      },
    ],
  },
];
