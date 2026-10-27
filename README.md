# SEOWebChecker SEO Audit for Umbraco

Official [Umbraco Marketplace](https://marketplace.umbraco.com/) package for **SEOWebChecker** ([https://seowebchecker.com/](https://seowebchecker.com/)), the privacy-first website search engine optimization diagnostic and auditing platform.

Enhance your Umbraco website with real-time on-page SEO diagnostics, Umbraco Backoffice dashboards, and automated Health Checks.

---

## 🚀 Key Features

- **Built-in Umbraco Health Check**:
  Adds an automated SEO check to **Settings > Health Check > SEO** verifying robots.txt, XML sitemaps, HTTPS protocol, canonical tags, mobile viewport, and social card configurations.
- **Interactive Backoffice Dashboard**:
  Provides editors and marketing teams with a clean dashboard under the **Content** and **Settings** sections to test live URLs and inspect on-page optimization.
- **Key Technical & On-Page Checks**:
  - **Title Tag & Meta Description**: Checks for optimal lengths (30–60 characters for title, 120–160 for description).
  - **Heading Structure**: Ensures a single primary `<h1>` heading and logical `<h2>`/`<h3>` subheadings.
  - **OpenGraph & Twitter Cards**: Validates `og:title`, `og:description`, `og:image`, and `twitter:card`.
  - **Canonical URL & Indexing Directives**: Verifies robots meta tags and canonical links to avoid duplicate content indexing.
  - **Mobile Viewport**: Ensures viewport readiness for search engine mobile-first indexing.
- **Universal Umbraco Compatibility**:
  Supports modern Umbraco (v14, v15+) via Web Components/Lit and long-term support versions (v10, v11, v12, v13 LTS) via AngularJS manifests.

---

## 📦 Installation

Install the package via the .NET CLI:

```bash
dotnet add package SeoWebChecker.Umbraco
```

Or via NuGet Package Manager in Visual Studio:

```powershell
Install-Package SeoWebChecker.Umbraco
```

Or reference it in your Umbraco web project (`.csproj`):

```xml
<ItemGroup>
  <PackageReference Include="SeoWebChecker.Umbraco" Version="1.0.0" />
</ItemGroup>
```

---

## 🛠️ Usage

1. **Umbraco Health Checks**:
   - Navigate to the Umbraco Backoffice: **Settings > Health Check**.
   - Expand the **SEO** category.
   - Click **Perform Check** under **SEOWebChecker SEO Audit**.
2. **Backoffice Dashboard**:
   - Open the **Content** or **Settings** section in Umbraco.
   - Select the **SEO Audit** dashboard.
   - Enter your target URL (or default to `https://seowebchecker.com/`) to perform an immediate live audit.

---

## 🔗 Official Links

- **Platform Homepage**: [https://seowebchecker.com/](https://seowebchecker.com/)
- **Umbraco Marketplace**: [https://marketplace.umbraco.com/](https://marketplace.umbraco.com/)
- **GitHub Repository**: [https://github.com/jaiganesh6999/seowebchecker-umbraco](https://github.com/jaiganesh6999/seowebchecker-umbraco)
- **License**: MIT
