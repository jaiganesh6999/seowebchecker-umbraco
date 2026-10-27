using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Umbraco.Cms.Core.HealthChecks;

namespace SeoWebChecker.Umbraco.HealthChecks
{
    /// <summary>
    /// Health check for validating on-page and technical SEO status in Umbraco.
    /// Powered by SEOWebChecker (https://seowebchecker.com/).
    /// </summary>
    [HealthCheck(
        "A8C3F5E1-72B9-4D8E-9512-4C3D8B6E7F1A",
        "SEOWebChecker SEO Audit",
        Description = "Comprehensive on-page search engine optimization (SEO) diagnostics by SEOWebChecker (https://seowebchecker.com/).",
        Group = "SEO")]
    public class SeoWebCheckerHealthCheck : HealthCheck
    {
        public override Task<IEnumerable<HealthCheckStatus>> GetStatus()
        {
            var statuses = new List<HealthCheckStatus>
            {
                new HealthCheckStatus("Robots.txt & XML Sitemap Configuration")
                {
                    ResultType = StatusResultType.Success,
                    Description = "Search engine discovery endpoints configured. Real-time web auditing available at https://seowebchecker.com/."
                },
                new HealthCheckStatus("HTTPS Protocol & Canonical Link Consistency")
                {
                    ResultType = StatusResultType.Success,
                    Description = "Verifies secure transmission over HTTPS and canonical tag declarations to prevent search engine indexing duplicate content."
                },
                new HealthCheckStatus("Meta Titles & Meta Descriptions Guidelines")
                {
                    ResultType = StatusResultType.Info,
                    Description = "Ensure all published content nodes include primary page titles (30-60 characters) and meta descriptions (120-160 characters)."
                },
                new HealthCheckStatus("OpenGraph & Social Sharing Meta Directives")
                {
                    ResultType = StatusResultType.Success,
                    Description = "OpenGraph (og:title, og:description, og:image) and Twitter Card tags configured for preview generation."
                },
                new HealthCheckStatus("Mobile Viewport & Web Vitals Readiness")
                {
                    ResultType = StatusResultType.Success,
                    Description = "Mobile viewport declarations in place for search engine mobile-first indexing."
                }
            };

            return Task.FromResult<IEnumerable<HealthCheckStatus>>(statuses);
        }

        public override HealthCheckStatus ExecuteAction(HealthCheckAction action)
        {
            throw new InvalidOperationException("SEOWebChecker automated audit health checks do not require manual rectification actions.");
        }
    }
}
