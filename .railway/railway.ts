import {
  bucket,
  defineRailway,
  github,
  group,
  image,
  preserve,
  project,
  service,
} from "railway/iac";

export default defineRailway((ctx) => {
  if (ctx.projectId !== "dea6b3d3-ea9a-49c5-82c7-0739830e2667") {
    throw new Error("Link this repository to the Portfolio Railway project before planning or applying.");
  }
  if (ctx.environmentId !== "afac0296-d1c3-4d00-8972-c601f7db963c") {
    throw new Error("This configuration describes the existing production environment only.");
  }

  const rawImages = bucket("raw images", { region: "iad" });
  const publicImgproxy = service("public imgproxy", {
    source: image("ghcr.io/imgproxy/imgproxy:v3"),
    healthcheck: "/health",
    replicas: { "us-east4-eqdc4a": 1 },
    networking: { privateNetworkEndpoint: "public-imgproxy" },
    env: {
      AWS_ACCESS_KEY_ID: preserve(),
      AWS_SECRET_ACCESS_KEY: preserve(),
      IMGPROXY_ALLOWED_SOURCES: preserve(),
      IMGPROXY_AUTO_AVIF: preserve(),
      IMGPROXY_AUTO_WEBP: preserve(),
      IMGPROXY_S3_ENDPOINT: preserve(),
      IMGPROXY_S3_ENDPOINT_USE_PATH_STYLE: preserve(),
      IMGPROXY_S3_REGION: preserve(),
      IMGPROXY_SKIP_PROCESSING_FORMATS: preserve(),
      IMGPROXY_USE_S3: preserve(),
    },
  });
  const portfolio = service("portfolio", {
    source: github("C41M50N/portfolio", { branch: "master", checkSuites: false }),
    replicas: { "us-east4-eqdc4a": 1 },
    deploy: {
      limitOverride: { containers: { cpu: 1, memoryBytes: 1000000000 } },
      restartPolicyMaxRetries: 3,
    },
    domains: [
      { domain: "cbuff.dev", port: 8080 },
      { domain: "www.cbuff.dev", port: 8080 },
    ],
  });
  const publicBucketImageProxy = group("Public Bucket Image Proxy", [publicImgproxy, rawImages]);

  return project("Portfolio", {
    resources: [portfolio, publicBucketImageProxy],
  });
});
