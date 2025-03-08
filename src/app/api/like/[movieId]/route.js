import prisma from "@/utils/prisma";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function POST(request, props) {
  const params = await props.params;

  const {
    movieId
  } = params;

  const token = await getToken({ req: request });

  if (!token) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.update({
    where: {
      email: token.email,
    },
    data: {
      movieLikes: {
        create: [{ movieId }],
      },
    },
  });

  return NextResponse.json(user);
}
