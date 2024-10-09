export default {
  settings: { name: "V1", slug: "v1", isDefault: true },
  sidebar: [
    {
      type: "section",
      label: "Home",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./introduction.mdx", pages: [] },
        {
          type: "page",
          path: "./quickstart.mdx",
          pages: [
            {
              type: "page",
              path: "./quickstart-create-an-account.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./quickstart-run-first-analysis.mdx",
              pages: [],
            },
            { type: "page", path: "./quickstart-fix-issues.mdx", pages: [] },
            {
              type: "page",
              path: "./quickstart-activate-new-repositories.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./quickstart-invite-team-members.mdx",
              pages: [],
            },
            { type: "page", path: "./quickstart-auto-onboard.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./configuration.mdx", pages: [] },
        {
          type: "page",
          path: "./analyzers.mdx",
          pages: [
            { type: "page", path: "./analyzers-python.mdx", pages: [] },
            { type: "page", path: "./analyzers-ansible.mdx", pages: [] },
            { type: "page", path: "./analyzers-c.mdx", pages: [] },
            { type: "page", path: "./analyzers-c-c.mdx", pages: [] },
            { type: "page", path: "./analyzers-docker.mdx", pages: [] },
            { type: "page", path: "./analyzers-java.mdx", pages: [] },
            { type: "page", path: "./analyzers-javascript.mdx", pages: [] },
            { type: "page", path: "./analyzers-php.mdx", pages: [] },
            { type: "page", path: "./analyzers-ruby.mdx", pages: [] },
            { type: "page", path: "./analyzers-rust.mdx", pages: [] },
            { type: "page", path: "./analyzers-scala.mdx", pages: [] },
            { type: "page", path: "./analyzers-secrets.mdx", pages: [] },
            { type: "page", path: "./analyzers-shell.mdx", pages: [] },
            { type: "page", path: "./analyzers-sql.mdx", pages: [] },
            { type: "page", path: "./analyzers-terraform.mdx", pages: [] },
            { type: "page", path: "./analyzers-test-coverage.mdx", pages: [] },
            { type: "page", path: "./analyzers-go.mdx", pages: [] },
            { type: "page", path: "./analyzers-swift.mdx", pages: [] },
            { type: "page", path: "./analyzers-kotlin.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./community-analyzers.mdx", pages: [] },
        {
          type: "page",
          path: "./transformers.mdx",
          pages: [
            { type: "page", path: "./transformers-autopep8.mdx", pages: [] },
            { type: "page", path: "./transformers-black.mdx", pages: [] },
            { type: "page", path: "./transformers-isort.mdx", pages: [] },
            { type: "page", path: "./transformers-gofmt.mdx", pages: [] },
            { type: "page", path: "./transformers-gofumpt.mdx", pages: [] },
            { type: "page", path: "./transformers-rustfmt.mdx", pages: [] },
            { type: "page", path: "./transformers-prettier.mdx", pages: [] },
            { type: "page", path: "./transformers-rubocop.mdx", pages: [] },
            { type: "page", path: "./transformers-scalafmt.mdx", pages: [] },
            { type: "page", path: "./transformers-standardjs.mdx", pages: [] },
            { type: "page", path: "./transformers-standardrb.mdx", pages: [] },
            { type: "page", path: "./transformers-yapf.mdx", pages: [] },
            {
              type: "page",
              path: "./transformers-google-java-format.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./transformers-dotnet-format.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./transformers-clang-format.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./transformers-php-cs-fixer.mdx",
              pages: [],
            },
            { type: "page", path: "./transformers-ktlint.mdx", pages: [] },
            {
              type: "page",
              path: "./transformers-swift-format.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./transformers-ruff-formatter.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./issues.mdx",
          pages: [
            { type: "page", path: "./issues-ignore-rules.mdx", pages: [] },
          ],
        },
        { type: "page", path: "./metrics.mdx", pages: [] },
        { type: "page", path: "./autofix.mdx", pages: [] },
        {
          type: "page",
          path: "./access-control.mdx",
          pages: [
            {
              type: "page",
              path: "./access-control-managing-members-in-your-team.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./access-control-managing-peoples-access-to-team-with-roles.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./access-control-managing-access-to-your-teams-repositories.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Dashboard",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./dashboard-account-management.mdx", pages: [] },
        {
          type: "page",
          path: "./team-view.mdx",
          pages: [
            { type: "page", path: "./team-view-home.mdx", pages: [] },
            { type: "page", path: "./team-view-repositories.mdx", pages: [] },
            { type: "page", path: "./team-view-reports.mdx", pages: [] },
            { type: "page", path: "./team-view-members.mdx", pages: [] },
            { type: "page", path: "./team-view-settings.mdx", pages: [] },
          ],
        },
        {
          type: "page",
          path: "./repository-view.mdx",
          pages: [
            { type: "page", path: "./repository-view-overview.mdx", pages: [] },
            { type: "page", path: "./repository-view-issues.mdx", pages: [] },
            { type: "page", path: "./repository-view-metrics.mdx", pages: [] },
            { type: "page", path: "./repository-view-reports.mdx", pages: [] },
            { type: "page", path: "./repository-view-history.mdx", pages: [] },
            {
              type: "page",
              path: "./repository-view-repository-settings.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./repository-view-monorepos.mdx",
              pages: [],
            },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Integrations",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./integrations-slack.mdx", pages: [] },
        { type: "page", path: "./integrations-jira.mdx", pages: [] },
        { type: "page", path: "./integrations-vanta.mdx", pages: [] },
        {
          type: "page",
          path: "./integrations-sso.mdx",
          pages: [
            { type: "page", path: "./sso-saml-sso-scim-okta.mdx", pages: [] },
            {
              type: "page",
              path: "./sso-saml-sso-scim-onelogin.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./sso-saml-sso-scim-azure-ad.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./saml-sso-scim-google-workspace.mdx",
              pages: [],
            },
          ],
        },
        { type: "page", path: "./integrations-vs-code.mdx", pages: [] },
      ],
    },
    {
      type: "section",
      label: "Enterprise Server",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./enterprise-server-overview.mdx", pages: [] },
        {
          type: "page",
          path: "./enterprise-server-requirements.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-installation.mdx",
          pages: [
            {
              type: "page",
              path: "./installation-standalone-cluster.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./installation-existing-kubernetes-cluster.mdx",
              pages: [],
            },
            { type: "page", path: "./airgapped-installation.mdx", pages: [] },
            { type: "page", path: "./helm.mdx", pages: [] },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server-vcs-integrations.mdx",
          pages: [
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-gh.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-gitlab.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-google-source-repositories.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-bitbucket-cloud.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-bitbucket-datacenter.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-vcs-integrations-azure-devops-services.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server-configuration.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-enterprise-upgrade-guide.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-control-panel.mdx",
          pages: [
            {
              type: "page",
              path: "./enterprise-server-control-panel-user-management.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-control-panel-scim-provisioning-on-okta.mdx",
              pages: [],
            },
            {
              type: "page",
              path: "./enterprise-server-control-panel-license.mdx",
              pages: [],
            },
          ],
        },
        {
          type: "page",
          path: "./enterprise-server-integration-jira-cloud.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-integration-slack.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-troubleshooting.mdx",
          pages: [],
        },
        {
          type: "page",
          path: "./enterprise-server-frequently-asked-questions.mdx",
          pages: [],
        },
      ],
    },
    {
      type: "section",
      label: "Developers",
      visibility: "PUBLIC",
      pages: [
        { type: "page", path: "./cli.mdx", pages: [] },
        { type: "page", path: "./webhooks.mdx", pages: [] },
        {
          type: "page",
          path: "./api.mdx",
          pages: [
            {
              type: "page",
              path: "./apis-personal-access-token.mdx",
              pages: [],
            },
            { type: "page", path: "./apis-viewer.mdx", pages: [] },
            { type: "page", path: "./apis-account.mdx", pages: [] },
            { type: "page", path: "./apis-team.mdx", pages: [] },
            { type: "page", path: "./apis-repository.mdx", pages: [] },
            { type: "page", path: "./apis-check.mdx", pages: [] },
            { type: "page", path: "./apis-analysis-run.mdx", pages: [] },
            { type: "page", path: "./apis-analyzer.mdx", pages: [] },
            { type: "page", path: "./apis-transformer.mdx", pages: [] },
            { type: "page", path: "./apis-issue.mdx", pages: [] },
            { type: "page", path: "./apis-metric.mdx", pages: [] },
            { type: "page", path: "./apis-reference-enums.mdx", pages: [] },
            { type: "page", path: "./apis-reference-scalars.mdx", pages: [] },
            {
              type: "page",
              path: "./apis-reference-pagination.mdx",
              pages: [],
            },
            { type: "page", path: "./apis-reports.mdx", pages: [] },
          ],
        },
      ],
    },
    {
      type: "section",
      label: "Help",
      visibility: "PUBLIC",
      pages: [
        {
          type: "page",
          path: "./help-frequently-asked-questions.mdx",
          pages: [],
        },
        { type: "page", path: "./help-troubleshooting.mdx", pages: [] },
        { type: "page", path: "./help-support.mdx", pages: [] },
        { type: "page", path: "./help-permissions.mdx", pages: [] },
      ],
    },
  ],
};
