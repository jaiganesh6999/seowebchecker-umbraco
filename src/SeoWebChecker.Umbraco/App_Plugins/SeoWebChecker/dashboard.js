import { LitElement, html, css } from '@umbraco-cms/backoffice/external/lit';

export class SeoWebCheckerDashboardElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: var(--uui-size-layout-1);
    }
    .card {
      background: var(--uui-color-surface);
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
      padding: var(--uui-size-layout-1);
      max-width: 900px;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--uui-size-space-5);
      border-bottom: 1px solid var(--uui-color-border);
      padding-bottom: var(--uui-size-space-4);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--uui-size-space-4);
      margin: var(--uui-size-space-5) 0;
    }
    .grid-item {
      background: var(--uui-color-surface-alt);
      padding: var(--uui-size-space-4);
      border-radius: var(--uui-border-radius);
    }
    .input-row {
      display: flex;
      gap: var(--uui-size-space-3);
      margin: var(--uui-size-space-4) 0;
    }
    input {
      flex: 1;
      padding: 10px;
      border: 1px solid var(--uui-color-border);
      border-radius: var(--uui-border-radius);
    }
    uui-button {
      font-weight: 600;
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="header">
          <div>
            <uui-tag color="positive" look="primary">SEOWebChecker</uui-tag>
            <h2 style="margin: 8px 0 4px 0;">Website SEO Audit for Umbraco</h2>
            <p style="margin: 0; color: var(--uui-color-text-alt);">On-page search engine optimization diagnostics by SEOWebChecker.</p>
          </div>
          <uui-button look="secondary" href="https://seowebchecker.com/" target="_blank">
            Visit Platform
          </uui-button>
        </div>

        <label style="font-weight: 600;">Website Target URL</label>
        <div class="input-row">
          <input id="audit-url" type="url" value="https://seowebchecker.com/" />
          <uui-button look="primary" color="positive" @click="${this._runAudit}">
            Run Full Audit
          </uui-button>
        </div>

        <div class="grid">
          <div class="grid-item">
            <strong>Meta Tags</strong>
            <p style="font-size: 13px; margin: 4px 0 0 0;">Validates titles (30-60 chars) and meta descriptions.</p>
          </div>
          <div class="grid-item">
            <strong>Headings</strong>
            <p style="font-size: 13px; margin: 4px 0 0 0;">Ensures single primary H1 & logical H2/H3 structure.</p>
          </div>
          <div class="grid-item">
            <strong>OpenGraph & Social</strong>
            <p style="font-size: 13px; margin: 4px 0 0 0;">Checks social cards (og:title, og:image, twitter:card).</p>
          </div>
          <div class="grid-item">
            <strong>Indexing Directives</strong>
            <p style="font-size: 13px; margin: 4px 0 0 0;">Checks canonical URLs, robots meta, and SSL/HTTPS.</p>
          </div>
        </div>
      </div>
    `;
  }

  _runAudit() {
    const input = this.shadowRoot.querySelector('#audit-url');
    const url = input ? input.value : 'https://seowebchecker.com/';
    window.open('https://seowebchecker.com/?url=' + encodeURIComponent(url), '_blank');
  }
}

customElements.define('seowebchecker-dashboard', SeoWebCheckerDashboardElement);
export default SeoWebCheckerDashboardElement;
