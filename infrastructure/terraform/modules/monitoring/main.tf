resource "helm_release" "prometheus" {
  name       = "prometheus-finops"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "prometheus"
  namespace  = var.namespace

  set {
    name  = "server.persistentVolume.size"
    value = "50Gi"
  }
}

resource "helm_release" "grafana" {
  name       = "grafana-finops"
  repository = "https://grafana.github.io/helm-charts"
  chart      = "grafana"
  namespace  = var.namespace

  set {
    name  = "adminPassword"
    value = var.grafana_password
  }
}
