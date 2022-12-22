module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
              Bucket: env('AWS_BUCKET_NAME'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
      "vercel-deploy": {
        enabled: true,
        deployHook: env('VERCEL_DEPLOY_PLUGIN_HOOK'),
        apiToken: env('VERCEL_DEPLOY_PLUGIN_API_TOKEN'),
        appFilter: env('VERCEL_DEPLOY_PLUGIN_APP_FILTER'),
        teamFilter: env('VERCEL_DEPLOY_PLUGIN_TEAM_FILTER'),
        roles: ["strapi-super-admin"],
      },
    }
  });