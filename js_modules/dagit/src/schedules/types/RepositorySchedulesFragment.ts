// @generated
/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PartitionRunStatus, JobType, JobStatus, PipelineRunStatus, JobTickStatus } from "./../../types/globalTypes";

// ====================================================
// GraphQL fragment: RepositorySchedulesFragment
// ====================================================

export interface RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_PythonError {
  __typename: "PythonError";
}

export interface RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_Partitions_results {
  __typename: "Partition";
  name: string;
  status: PartitionRunStatus;
}

export interface RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_Partitions {
  __typename: "Partitions";
  results: RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_Partitions_results[];
}

export type RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError = RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_PythonError | RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError_Partitions;

export interface RepositorySchedulesFragment_schedules_partitionSet {
  __typename: "PartitionSet";
  name: string;
  partitionsOrError: RepositorySchedulesFragment_schedules_partitionSet_partitionsOrError;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_repositoryOrigin_repositoryLocationMetadata {
  __typename: "RepositoryMetadata";
  key: string;
  value: string;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_repositoryOrigin {
  __typename: "RepositoryOrigin";
  repositoryLocationName: string;
  repositoryName: string;
  repositoryLocationMetadata: RepositorySchedulesFragment_schedules_scheduleState_repositoryOrigin_repositoryLocationMetadata[];
}

export interface RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData_SensorJobData {
  __typename: "SensorJobData";
  lastRunKey: string | null;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData_ScheduleJobData {
  __typename: "ScheduleJobData";
  cronSchedule: string;
}

export type RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData = RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData_SensorJobData | RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData_ScheduleJobData;

export interface RepositorySchedulesFragment_schedules_scheduleState_runs {
  __typename: "PipelineRun";
  id: string;
  runId: string;
  status: PipelineRunStatus;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_ticks_runs {
  __typename: "PipelineRun";
  id: string;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_ticks_error_cause {
  __typename: "PythonError";
  message: string;
  stack: string[];
}

export interface RepositorySchedulesFragment_schedules_scheduleState_ticks_error {
  __typename: "PythonError";
  message: string;
  stack: string[];
  cause: RepositorySchedulesFragment_schedules_scheduleState_ticks_error_cause | null;
}

export interface RepositorySchedulesFragment_schedules_scheduleState_ticks {
  __typename: "JobTick";
  id: string;
  status: JobTickStatus;
  timestamp: number;
  skipReason: string | null;
  runs: RepositorySchedulesFragment_schedules_scheduleState_ticks_runs[];
  error: RepositorySchedulesFragment_schedules_scheduleState_ticks_error | null;
}

export interface RepositorySchedulesFragment_schedules_scheduleState {
  __typename: "JobState";
  id: string;
  name: string;
  jobType: JobType;
  status: JobStatus;
  repositoryOrigin: RepositorySchedulesFragment_schedules_scheduleState_repositoryOrigin;
  jobSpecificData: RepositorySchedulesFragment_schedules_scheduleState_jobSpecificData | null;
  runs: RepositorySchedulesFragment_schedules_scheduleState_runs[];
  ticks: RepositorySchedulesFragment_schedules_scheduleState_ticks[];
  runningCount: number;
}

export interface RepositorySchedulesFragment_schedules_futureTicks_results {
  __typename: "FutureJobTick";
  timestamp: number;
}

export interface RepositorySchedulesFragment_schedules_futureTicks {
  __typename: "FutureJobTicks";
  results: RepositorySchedulesFragment_schedules_futureTicks_results[];
}

export interface RepositorySchedulesFragment_schedules {
  __typename: "Schedule";
  id: string;
  name: string;
  cronSchedule: string;
  executionTimezone: string | null;
  pipelineName: string;
  solidSelection: (string | null)[] | null;
  mode: string;
  partitionSet: RepositorySchedulesFragment_schedules_partitionSet | null;
  scheduleState: RepositorySchedulesFragment_schedules_scheduleState;
  futureTicks: RepositorySchedulesFragment_schedules_futureTicks;
}

export interface RepositorySchedulesFragment_origin_repositoryLocationMetadata {
  __typename: "RepositoryMetadata";
  key: string;
  value: string;
}

export interface RepositorySchedulesFragment_origin {
  __typename: "RepositoryOrigin";
  repositoryLocationName: string;
  repositoryName: string;
  repositoryLocationMetadata: RepositorySchedulesFragment_origin_repositoryLocationMetadata[];
}

export interface RepositorySchedulesFragment_location {
  __typename: "RepositoryLocation";
  id: string;
  name: string;
}

export interface RepositorySchedulesFragment {
  __typename: "Repository";
  name: string;
  id: string;
  schedules: RepositorySchedulesFragment_schedules[];
  origin: RepositorySchedulesFragment_origin;
  location: RepositorySchedulesFragment_location;
}
