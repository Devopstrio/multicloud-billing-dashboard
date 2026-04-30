resource "aws_db_instance" "billing_db" {
  allocated_storage    = 100
  storage_type         = "gp3"
  engine               = "postgres"
  engine_version       = "15.3"
  instance_class       = "db.t4g.large"
  name                 = "billing_dashboard_db"
  username             = var.db_user
  password             = var.db_password
  parameter_group_name = "default.postgres15"
  skip_final_snapshot  = true
  multi_az             = true
  storage_encrypted    = true
  publicly_accessible  = false

  tags = {
    Name = "multicloud-billing-db"
    CostCenter = "FinOps"
  }
}
