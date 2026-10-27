using Umbraco.Cms.Core.Composing;
using Umbraco.Cms.Core.DependencyInjection;
using Umbraco.Cms.Core.HealthChecks;
using SeoWebChecker.Umbraco.HealthChecks;

namespace SeoWebChecker.Umbraco.Composing
{
    /// <summary>
    /// Umbraco Composer that registers SEOWebChecker services and health checks.
    /// Homepage: https://seowebchecker.com/
    /// </summary>
    public class SeoWebCheckerComposer : IComposer
    {
        public void Compose(IUmbracoBuilder builder)
        {
            builder.HealthChecks().Add<SeoWebCheckerHealthCheck>();
        }
    }
}
