import { useSession, signIn, signOut } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';
import ScheduleCalendar from '../components/ScheduleCalendar';
import AddSchedule from '../components/AddSchedule';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const schedules = await prisma.schedule.findMany();
  return {
    props: { schedules },
  };
}

export default function Home({ schedules }) {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <>
          <button onClick={() => signIn()}>Sign In</button>
        </>
      ) : (
        <>
          <button onClick={() => signOut()}>Sign Out</button>
          <h1>Welcome, {session.user.name}</h1>
          <ScheduleCalendar schedules={schedules} />
          <AddSchedule userId={session.user.id} />
        </>
      )}
    </div>
  );
}
