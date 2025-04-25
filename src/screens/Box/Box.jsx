import {
    BarChart3Icon,
    BellIcon,
    CalendarIcon,
    ChevronDownIcon,
    ClockIcon,
    FileTextIcon,
    HomeIcon,
    LayoutDashboardIcon,
    MessageSquareIcon,
    PlusIcon,
    SearchIcon,
    SettingsIcon,
    UsersIcon,
  } from "lucide-react";
  import React from "react";
  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "../../components/ui/avatar";
  import { Badge } from "../../components/ui/badge";
  import { Button } from "../../components/ui/button";
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "../../components/ui/card";
  import { Progress } from "../../components/ui/progress";
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../../components/ui/table";
  
  export const Box = () => {
    // Navigation menu items
    const menuItems = [
      { icon: <HomeIcon className="h-5 w-5" />, label: "Home", active: false },
      {
        icon: <LayoutDashboardIcon className="h-5 w-5" />,
        label: "Dashboard",
        active: true,
      },
      {
        icon: <MessageSquareIcon className="h-5 w-5" />,
        label: "Messages",
        active: false,
      },
      {
        icon: <FileTextIcon className="h-5 w-5" />,
        label: "Documents",
        active: false,
      },
      { icon: <UsersIcon className="h-5 w-5" />, label: "Team", active: false },
      {
        icon: <SettingsIcon className="h-5 w-5" />,
        label: "Settings",
        active: false,
      },
    ];
  
    // Project stats data
    const projectStats = [
      {
        title: "Total Projects",
        value: "45",
        icon: <FileTextIcon className="h-5 w-5 text-blue-500" />,
      },
      {
        title: "In Progress",
        value: "15",
        icon: <ClockIcon className="h-5 w-5 text-yellow-500" />,
      },
      {
        title: "Completed",
        value: "27",
        icon: <BarChart3Icon className="h-5 w-5 text-green-500" />,
      },
      {
        title: "Team Members",
        value: "9",
        icon: <UsersIcon className="h-5 w-5 text-purple-500" />,
      },
    ];
  
    // Recent projects data
    const recentProjects = [
      {
        name: "Website Redesign",
        status: "In Progress",
        progress: 75,
        dueDate: "Oct 25",
        members: 3,
      },
      {
        name: "Mobile App Development",
        status: "In Review",
        progress: 60,
        dueDate: "Nov 10",
        members: 4,
      },
      {
        name: "Marketing Campaign",
        status: "Completed",
        progress: 100,
        dueDate: "Oct 15",
        members: 2,
      },
      {
        name: "Database Migration",
        status: "In Progress",
        progress: 40,
        dueDate: "Nov 18",
        members: 5,
      },
    ];
  
    // Team members data
    const teamMembers = [
      { name: "Alex Morgan", role: "Product Designer", avatar: "AM" },
      { name: "Sarah Chen", role: "Frontend Developer", avatar: "SC" },
      { name: "Michael Kim", role: "Backend Developer", avatar: "MK" },
    ];
  
    return (
      <div className="flex h-screen bg-gray-950 text-white">
        {/* Sidebar */}
        <div className="w-64 border-r border-gray-800 p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="font-bold">P</span>
            </div>
            <h1 className="text-xl font-bold">ProjectHub</h1>
          </div>
  
          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-3 px-3 py-2 rounded-md ${
                  item.active
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
  
          <div className="mt-auto pt-6">
            <Card className="bg-gray-800 border-0">
              <CardContent className="p-4">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-2 mt-2">
                    <CalendarIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-medium mb-1">New Project Meeting</h3>
                  <p className="text-sm text-gray-400 mb-3">Today at 3:30 PM</p>
                  <Button
                    size="sm"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Join Meeting
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Header */}
          <header className="border-b border-gray-800 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3 bg-gray-800 rounded-md px-3 py-2 w-72">
                <SearchIcon className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="SearchIcon projects..."
                  className="bg-transparent border-none focus:outline-none text-sm w-full"
                />
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300"
                >
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Project
                </Button>
                <div className="relative">
                  <BellIcon className="h-5 w-5 text-gray-400" />
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-blue-600">JD</AvatarFallback>
                  </Avatar>
                  <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </header>
  
          {/* Dashboard Content */}
          <main className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Project Dashboard</h1>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className="border-gray-700 text-gray-300"
                >
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  October 2023
                </Button>
              </div>
            </div>
  
            {/* Stats Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {projectStats.map((stat, index) => (
                <Card key={index} className="bg-gray-800 border-0">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-400">{stat.title}</p>
                        <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
                      </div>
                      <div className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
                        {stat.icon}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
  
            {/* Recent Projects */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Recent Projects</h2>
                <Button
                  variant="ghost"
                  className="text-gray-400 hover:text-white"
                >
                  View All
                  <ChevronDownIcon className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {recentProjects.map((project, index) => (
                  <Card key={index} className="bg-gray-800 border-0">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-medium">{project.name}</h3>
                        <Badge
                          className={`${
                            project.status === "Completed"
                              ? "bg-green-500"
                              : project.status === "In Review"
                                ? "bg-yellow-500"
                                : "bg-blue-500"
                          } text-xs`}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <Progress
                          value={project.progress}
                          className="h-1.5 bg-gray-700"
                        />
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-gray-400">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          <span>Due {project.dueDate}</span>
                        </div>
                        <div className="flex -space-x-2">
                          {Array(project.members)
                            .fill(0)
                            .map((_, i) => (
                              <Avatar
                                key={i}
                                className="h-6 w-6 border-2 border-gray-800"
                              >
                                <AvatarFallback className="bg-blue-600 text-xs">
                                  {String.fromCharCode(65 + i)}
                                </AvatarFallback>
                              </Avatar>
                            ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
  
            {/* Team Members & Tasks */}
            <div className="grid grid-cols-3 gap-6">
              {/* Team Members */}
              <Card className="bg-gray-800 border-0 col-span-1">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Team Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-blue-600">
                            {member.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{member.name}</h4>
                          <p className="text-sm text-gray-400">{member.role}</p>
                        </div>
                      </div>
                    ))}
                    <Button
                      variant="ghost"
                      className="w-full border border-dashed border-gray-700 text-gray-400 mt-2"
                    >
                      <PlusIcon className="h-4 w-4 mr-2" />
                      Add New Member
                    </Button>
                  </div>
                </CardContent>
              </Card>
  
              {/* Tasks */}
              <Card className="bg-gray-800 border-0 col-span-2">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Upcoming Tasks</CardTitle>
                    <Button variant="ghost" size="sm" className="text-gray-400">
                      View All
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-700">
                        <TableHead className="text-gray-400">Task</TableHead>
                        <TableHead className="text-gray-400">Status</TableHead>
                        <TableHead className="text-gray-400">Due Date</TableHead>
                        <TableHead className="text-gray-400">Priority</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-gray-700">
                        <TableCell className="font-medium">
                          Design System Update
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-blue-500 text-xs">
                            In Progress
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-400">Oct 28</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-yellow-500 text-yellow-500 text-xs"
                          >
                            Medium
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-gray-700">
                        <TableCell className="font-medium">
                          API Integration
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-yellow-500 text-xs">
                            In Review
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-400">Nov 2</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-red-500 text-red-500 text-xs"
                          >
                            High
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-gray-700">
                        <TableCell className="font-medium">
                          User Testing
                        </TableCell>
                        <TableCell>
                          <Badge className="bg-green-500 text-xs">
                            Completed
                          </Badge>
                        </TableCell>
                        <TableCell className="text-gray-400">Oct 18</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-500 text-xs"
                          >
                            Low
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    );
  };
  