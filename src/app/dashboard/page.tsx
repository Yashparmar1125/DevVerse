
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, PlusCircle, Users, Activity, Briefcase, IndianRupee, BarChart3 } from "lucide-react";
import Link from "next/link";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const earningsData = [
  { month: "Jan", earnings: 186000 },
  { month: "Feb", earnings: 305000 },
  { month: "Mar", earnings: 237000 },
  { month: "Apr", earnings: 73000 },
  { month: "May", earnings: 209000 },
  { month: "Jun", earnings: 214000 },
]

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(var(--primary))",
  },
}

export default function DashboardPage() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-4xl font-headline font-bold tracking-tight">Dashboard</h1>
            <p className="text-lg text-muted-foreground mt-1">Welcome back! Here's a summary of your activity.</p>
        </div>
        <Tabs defaultValue="client" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-sm">
                <TabsTrigger value="client">Client View</TabsTrigger>
                <TabsTrigger value="developer">Developer View</TabsTrigger>
            </TabsList>
            <TabsContent value="client" className="mt-8">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Projects</CardTitle>
                            <Briefcase className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">3</div>
                            <p className="text-xs text-muted-foreground">+2 since last month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Proposals Received</CardTitle>
                             <Users className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">12</div>
                            <p className="text-xs text-muted-foreground">5 new proposals waiting</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Total Spent</CardTitle>
                             <IndianRupee className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">₹996,000</div>
                             <p className="text-xs text-muted-foreground">Across 5 projects</p>
                        </CardContent>
                    </Card>
                     <Card className="border-primary/40 border-dashed bg-primary/5">
                        <CardHeader className="pb-3">
                             <CardTitle className="text-base font-semibold flex items-center gap-2"><PlusCircle className="text-primary"/>Post a New Project</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <p className="text-sm text-muted-foreground mb-4">Ready to start something new? Get AI-powered developer matches.</p>
                             <Button className="w-full" asChild>
                                <Link href="/ai-matcher">Use AI Matcher</Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
                 <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Your Active Projects</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8">
                        <div>
                            <div className="mb-2 flex justify-between items-baseline">
                                <h3 className="font-semibold text-base">E-commerce Platform</h3>
                                <p className="text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">₹640,000</span></p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Progress value={75} className="h-2"/>
                                <span className="text-base font-medium text-primary w-12 text-right">75%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next milestone: Payment Gateway Integration</p>
                        </div>
                        <div>
                            <div className="mb-2 flex justify-between items-baseline">
                                <h3 className="font-semibold text-base">Mobile Fitness App</h3>
                                <p className="text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">₹960,000</span></p>
                            </div>
                             <div className="flex items-center gap-4">
                                <Progress value={40} className="h-2"/>
                                <span className="text-base font-medium text-primary w-12 text-right">40%</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-2">Next milestone: User Profile UI</p>
                        </div>
                    </CardContent>
                 </Card>
            </TabsContent>
            <TabsContent value="developer" className="mt-8">
                 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    <Card>
                         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Total Earnings</CardTitle>
                            <IndianRupee className="h-5 w-5 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">₹2,318,400</div>
                            <p className="text-xs text-muted-foreground">+15% this quarter</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Gigs</CardTitle>
                             <Briefcase className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">2</div>
                            <p className="text-xs text-muted-foreground">1 pending start</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">New Bids</CardTitle>
                             <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold">8</div>
                             <p className="text-xs text-muted-foreground">3 new project invites</p>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Availability</CardTitle>
                             <Activity className="h-5 w-5 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                             <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"/>
                                <div className="text-xl font-bold">Available</div>
                             </div>
                             <p className="text-xs text-muted-foreground mt-1">Ready for new projects</p>
                        </CardContent>
                    </Card>
                </div>
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><BarChart3 className="h-5 w-5"/>Earnings Overview</CardTitle>
                            <CardDescription>Your earnings for the last 6 months.</CardDescription>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                <BarChart accessibilityLayer data={earningsData}>
                                    <XAxis
                                        dataKey="month"
                                        tickLine={false}
                                        axisLine={false}
                                        tickMargin={8}
                                        tickFormatter={(value) => value.slice(0, 3)}
                                    />
                                    <YAxis
                                      tickFormatter={(value) => `₹${Number(value) / 1000}k`}
                                      tickLine={false}
                                      axisLine={false}
                                      width={40}
                                    />
                                    <ChartTooltip
                                        cursor={false}
                                        content={<ChartTooltipContent 
                                          formatter={(value) => `₹${Number(value).toLocaleString()}`}
                                          indicator="dot"
                                        />}
                                    />
                                    <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                     </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Recent Project Invitations</CardTitle>
                            <CardDescription>Projects you might be a good fit for.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className="divide-y divide-border -mt-4">
                                <li className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex-grow">
                                        <h4 className="font-semibold">AI-Powered Chatbot</h4>
                                        <p className="text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">₹1,200,000</span> &bull; Category: Machine Learning</p>
                                    </div>
                                    <Button variant="outline" size="sm">View & Bid</Button>
                                </li>
                                 <li className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex-grow">
                                        <h4 className="font-semibold">Data Visualization Dashboard</h4>
                                        <p className="text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">₹600,000</span> &bull; Category: Web Development</p>
                                    </div>
                                    <Button variant="outline" size="sm">View & Bid</Button>
                                </li>
                                <li className="py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="flex-grow">
                                        <h4 className="font-semibold">Mobile Banking App</h4>
                                        <p className="text-sm text-muted-foreground">Budget: <span className="font-medium text-foreground">₹1,800,000</span> &bull; Category: Mobile Development</p>
                                    </div>
                                    <Button variant="outline" size="sm">View & Bid</Button>
                                </li>
                           </ul>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                            <Button variant="link" className="p-0 h-auto" asChild>
                                <Link href="/projects">Browse all projects</Link>
                            </Button>
                        </CardFooter>
                     </Card>
                 </div>
            </TabsContent>
        </Tabs>
    </div>
  )
}
