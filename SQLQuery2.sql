USE [CustomerDB]
GO
/****** Object:  Table [dbo].[CustomerMaster]    Script Date: 3/15/2024 8:02:31 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerMaster](
	[CustomerCode] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](100) NULL,
	[Address] [nvarchar](200) NULL,
	[Email] [nvarchar](100) NULL,
	[MobileNo] [varchar](15) NULL,
	[GeoLocation] [varchar](150) NULL,
 CONSTRAINT [PK_CustomerMaster] PRIMARY KEY CLUSTERED 
(
	[CustomerCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[CustomerMaster] ON 
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (1, N'Arun Kumar', N'House No. 123, Kottayam, Kerala, India', N'arun@example.com', N'9876543210', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (2, N'Priya Nair', N'Flat No. 456, Kochi, Kerala, India', N'priya@example.com', N'9876543211', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (3, N'Suresh Menon', N'Apartment No. 789, Trivandrum, Kerala, India', N'suresh@example.com', N'9876543212', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (4, N'Deepa Pillai', N'Villa No. 101, Alappuzha, Kerala, India', N'deepa@example.com', N'9876543213', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (5, N'Rajesh Soman', N'Street No. 202, Thrissur, Kerala, India', N'rajesh@example.com', N'9876543214', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (6, N'Manju Nambiar', N'Road No. 303, Kannur, Kerala, India', N'manju@example.com', N'9876543215', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (7, N'Anil Kumar', N'Lane No. 404, Kozhikode, Kerala, India', N'anil@example.com', N'9876543216', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (8, N'Shiny Rajan', N'Township No. 505, Palakkad, Kerala, India', N'shiny@example.com', N'9876543217', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (9, N'Vinod Menon', N'Plot No. 606, Malappuram, Kerala, India', N'vinod@example.com', N'9876543218', N'9.9602427, 76.2882467')
GO
INSERT [dbo].[CustomerMaster] ([CustomerCode], [Name], [Address], [Email], [MobileNo], [GeoLocation]) VALUES (10, N'Sangeetha Nair', N'Building No. 707, Pathanamthitta, Kerala, India', N'sangeetha@example.com', N'9876543219', N'9.9602427, 76.2882467')
GO
SET IDENTITY_INSERT [dbo].[CustomerMaster] OFF
GO
