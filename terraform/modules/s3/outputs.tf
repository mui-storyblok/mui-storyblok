output "hosted_zone_id" {
  value = "${aws_s3_bucket.bucket.hosted_zone_id}"
}
output "bucket" {
  value = "${aws_s3_bucket.bucket.bucket}"
}

output "region" {
  value = "${aws_s3_bucket.bucket.region}"
}

output "name" {
  value = "${aws_s3_bucket.bucket.id}"
}

output "website_domain" {
  value = "${aws_s3_bucket.bucket.website_domain}"
}

output "bucket_domain_name" {
  value = "${aws_s3_bucket.bucket.bucket_domain_name}"
}

output "bucket_regional_domain_name" {
  value = "${aws_s3_bucket.bucket.bucket_regional_domain_name}"
}
