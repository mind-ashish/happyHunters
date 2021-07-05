CREATE DATABASE happy_hunters;
use happy_hunters;
create table Recruiters(
RecruiterId int AUTO_INCREMENT,
OrgName varchar(100),
Mail varchar(255),
Phone varchar(20),
Pwd varchar(20),
PRIMARY KEY (RecruiterId)
);
create table Applicants(
ApplicantId int AUTO_INCREMENT,
FirstName varchar(50),
LastName varchar(50),
Mail varchar(255),
Phone varchar(20),
Pwd varchar(20),
KeySkills varchar(255),
Experience int(10),
CurrentOrg varchar(255),
Education varchar(255),
College varchar(255),
PRIMARY KEY (ApplicantId)
);
create table Jobs(
JobId int AUTO_INCREMENT,
RecruiterId int,
JobTitle varchar(50),
JobDesc varchar(255),
CreatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (JobId),
FOREIGN KEY (RecruiterId) REFERENCES Recruiters(RecruiterId)
);
create table JobsApplicants(
JobId int,
ApplicantId int,
FOREIGN KEY (JobId) REFERENCES Jobs(JobId),
FOREIGN KEY (ApplicantId) REFERENCES Applicants(ApplicantId)
);
create table CollegesMaster(
College varchar(255)
);
insert into CollegesMaster
values("ADGITM, New Delhi"),("DTU, New Delhi"),("NSUT, New Delhi"),("MSIT, New Delhi"),("MAIT, New Delhi"),("VIT, Vellore"),("IGDTU , New Delhi"),("Ramjas, New Delhi")



